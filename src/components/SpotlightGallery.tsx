'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
    images: { src: string; thumb: string }[]
    title: string
}

interface ImageDimensions {
    src: string
    thumb: string
    alt: string
    height: number
    width: number
    index: number
}

interface SpotlightImage {
    src: string
    alt: string
    title?: string
    description?: string
}

declare global {
    interface Window {
        Spotlight: {
            show: (gallery: SpotlightImage[], options?: object) => void
            init: (options?: object) => void
            close: () => void
            next: () => void
            prev: () => void
        }
    }
}

export default function SpotlightGallery({ images, title }: GalleryProps) {
    const defaultWidth = 600
    const defaultHeight = 400
    const defaultAspectRatio = defaultHeight / defaultWidth

    // Initialize each image with default dimensions
    const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([])
    const [columns, setColumns] = useState(getInitialColumns())

    const gallery = images.map((img, index) => ({
        src: img.src,
        alt: `${title} - Photo ${index + 1} of ${images.length}`,
        title,
        description: `Photo ${index + 1} of ${images.length}`,
    }))

    // Determine column count based on window width
    function getInitialColumns() {
        if (typeof window === 'undefined') return 5 // SSR default
        if (window.innerWidth < 768) return 2       // Tablet
        if (window.innerWidth < 1024) return 3      // Small desktop
        if (window.innerWidth < 1280) return 4      // Medium desktop
        return 5                                    // Large desktop
    }

    // Update columns on window resize
    useEffect(() => {
        function updateColumns() {
            const width = window.innerWidth
            let newColumns
            if (width < 640) newColumns = 1
            else if (width < 768) newColumns = 2
            else if (width < 1024) newColumns = 3
            else if (width < 1280) newColumns = 4
            else newColumns = 5

            setColumns(newColumns)
        }

        updateColumns()
        window.addEventListener('resize', updateColumns)
        return () => window.removeEventListener('resize', updateColumns)
    }, [])

    // Initialize default dimensions for every image when images prop changes
    useEffect(() => {
        const initialDimensions = images.map((img, index) => ({
            src: img.src,
            thumb: img.thumb,
            alt: `${title} - Photo ${index + 1} of ${images.length}`,
            height: defaultHeight,
            width: defaultWidth,
            index,
        }))
        setImageDimensions(initialDimensions)
    }, [images, title, defaultWidth, defaultHeight])

    // Update the dimensions for a given image after its thumbnail loads
    const updateImageDimensions = (index: number, naturalWidth: number, naturalHeight: number) => {
        setImageDimensions(prevDimensions => {
            const newDimensions = [...prevDimensions]
            // Only update if the dimensions have changed to avoid extra re-renders.
            if (
                newDimensions[index].width !== naturalWidth ||
                newDimensions[index].height !== naturalHeight
            ) {
                newDimensions[index] = {
                    ...newDimensions[index],
                    width: naturalWidth,
                    height: naturalHeight,
                }
            }
            return newDimensions
        })
    }

    // Distribute images across the calculated columns
    const getColumnImages = () => {
        if (!imageDimensions.length) return Array.from({ length: columns }, () => [])
        const columnImages: ImageDimensions[][] = Array.from({ length: columns }, () => [])
        imageDimensions.forEach((img, index) => {
            const columnIndex = index % columns
            columnImages[columnIndex].push(img)
        })
        return columnImages
    }

    return (
        <div
            data-title={title}
            data-control="autofit,fullscreen,zoom,prev,next,close"
            data-infinite="true"
            data-autohide="true"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {getColumnImages().map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col gap-3">
                        {column.map((image: ImageDimensions, imageIndex: number) => (
                            <a
                                key={`${columnIndex}-${imageIndex}`}
                                className="block cursor-pointer overflow-hidden rounded-lg shadow-md"
                                onClick={() => {
                                    window.Spotlight.show(gallery, { index: image.index + 1 })
                                }}
                                data-title={image.alt}
                            >
                                <div
                                    className="relative w-full"
                                    style={{
                                        paddingBottom: `${(image.height / image.width) * 100}%`
                                    }}
                                >
                                    <Image
                                        src={image.thumb}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform hover:scale-110"
                                        unoptimized
                                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                                            updateImageDimensions(image.index, naturalWidth, naturalHeight)
                                        }
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
