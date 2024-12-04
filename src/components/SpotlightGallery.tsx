'use client'

import { useRef } from 'react'
import Image from 'next/image'

interface GalleryProps {
    images: { src: string; alt: string }[]
    title: string
}

declare global {
    interface Window {
        Spotlight: any;
    }
}

export default function SpotlightGallery({ images, title }: GalleryProps) {
    const galleryRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={galleryRef}
            className="spotlight-group"
            data-title={title}
            data-animation="fade"
            data-control="autofit,fullscreen,zoom,prev,next"
            data-infinite="true"
            data-autohide="true"
        >
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <a
                        key={index}
                        className="spotlight block cursor-pointer overflow-hidden rounded-lg shadow-md break-inside-avoid"
                        href={image.src}
                        data-title={image.alt}
                    >
                        <div className="relative w-full" style={{
                            paddingBottom: index % 2 === 0 ? '75%' : '100%'
                        }}>
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
        </div>
    )
}