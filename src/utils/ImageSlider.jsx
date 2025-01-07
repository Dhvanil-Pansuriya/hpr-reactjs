import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img_global_partnerships from '../assets/about/img_global_partnerships.png'
import img_research from '../assets/about/img_research.png'
import img_sustainable_campus from '../assets/about/img_sustainable_campus.png'

const slides = [

    {
        url: img_research,
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    },
    {
        url: img_global_partnerships,
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla..',
    },

    {
        url: img_sustainable_campus,
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint corporis animi sit reprehenderit quaerat officia voluptatibus quia dolor magni iusto modi corrupti, fugit exercitationem vero, nisi molestias magnam nulla.',
    },
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const timeoutRef = useRef(null);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    useEffect(() => {
        if (isAutoPlaying) {
            timeoutRef.current = setTimeout(goToNext, 5000);
        }
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, isAutoPlaying, goToNext]);

    return (
        <div
            className="relative h-[600px] w-full  mx-auto my-14 overflow-hidden rounded-xl shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="h-full w-full flex-shrink-0 relative"
                    >
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="h-full w-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-light">
                            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                            <p className="text-lg">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary/30 p-3 text-primary-light backdrop-blur-sm transition-all hover:bg-secondary/50"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary/30 p-3 text-primary-light backdrop-blur-sm transition-all hover:bg-secondary/50"
                aria-label="Next slide"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 rounded-full transition-all ${currentIndex === index
                            ? "bg-background/60 w-10"
                            : "bg-primary-light/50 hover:bg-primary/75 w-3"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;

