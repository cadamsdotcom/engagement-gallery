'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
    images: { src: string; alt: string }[]
    title: string
}

interface ImageDimensions {
    src: string
    alt: string
    height: number
    width: number
}

interface SpotlightImage {
    src: string;
    alt: string;
    title?: string;
    description?: string;
}

declare global {
    interface Window {
        Spotlight: {
            show: (gallery: SpotlightImage[], options?: object) => void;
            init: (options?: object) => void;
            close: () => void;
            next: () => void;
            prev: () => void;
        }
    }
}

export default function SpotlightGallery({ images, title }: GalleryProps) {
    const galleryRef = useRef<HTMLDivElement>(null)
    const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([])
    const [columns, setColumns] = useState(getInitialColumns())

    // Helper function to determine column count based on window width
    function getInitialColumns() {
        if (typeof window === 'undefined') return 5 // SSR default
        if (window.innerWidth < 640) return 1       // Mobile
        if (window.innerWidth < 768) return 2       // Tablet
        if (window.innerWidth < 1024) return 3      // Small desktop
        if (window.innerWidth < 1280) return 4      // Medium desktop
        return 5                                    // Large desktop
    }

    // Update columns when window resizes
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

    // Get image dimensions
    useEffect(() => {
        const loadImages = async () => {
            const dimensionsPromises = images.map(img =>
                new Promise<ImageDimensions>((resolve) => {
                    const imgElement = document.createElement('img')
                    imgElement.src = img.src
                    imgElement.onload = () => {
                        resolve({
                            src: img.src,
                            alt: img.alt,
                            height: imgElement.naturalHeight,
                            width: imgElement.naturalWidth
                        })
                    }
                    imgElement.onerror = () => {
                        resolve({
                            src: img.src,
                            alt: img.alt,
                            height: 400,
                            width: 600
                        })
                    }
                })
            )
            const dimensions = await Promise.all(dimensionsPromises)
            setImageDimensions(dimensions)
        }

        loadImages()
    }, [images])

    // Distribute images across columns
    const getColumnImages = () => {
        if (!imageDimensions.length) return Array(columns).fill([])

        const columnImages: ImageDimensions[][] = Array(columns).fill(null).map(() => [])

        imageDimensions.forEach((img, index) => {
            const columnIndex = index % columns
            columnImages[columnIndex].push(img)
        })

        return columnImages
    }

    return (
        <div
            ref={galleryRef}
            className="spotlight-group"
            data-title={title}
            data-animation="fade"
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
                                className="spotlight block cursor-pointer overflow-hidden rounded-lg shadow-md"
                                href={image.src}
                                data-title={image.alt}
                            >
                                <div
                                    className="relative w-full"
                                    style={{
                                        paddingBottom: `${(image.height / image.width) * 100}%`
                                    }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform hover:scale-110"
                                        unoptimized
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
