import { useState } from "react";

export default function Carousel2() {
    const [carouselIndex, setCarouselIndex] = useState(0)

    const turnLeft = () => {
        setCarouselIndex(carouselIndex === 0 ? carousel.length - 1 : carouselIndex - 1)
    }
    const turnRight = () => {
        setCarouselIndex(carouselIndex === carousel.length - 1 ? 0 : carouselIndex + 1)
    }

    const carousel = [
        '/img1.webp',
        '/img2.avif',
        '/img3.avif',
        '/img4.webp',
    ]

    return (
        <container>
            <h1>Carousel 2</h1>
            <article className="relative border w-[400px] aspect-video rounded-lg overflow-hidden">
                <div 
                    style={{ transform: `translateX(-${carouselIndex * 100}%)`}}
                    className={`
                    absolute flex transition-all duration-500
                    `}>
                    {carousel.map((item, index) => {
                        return (
                            <img className="w-[400px] aspect-video object-cover" src={item} alt="carousel" key={index} />
                        )
                    })}
                </div>
            </article>
            <div className="w-[400px] flex justify-center gap-1 my-2">
                {carousel.map((item, index) => {
                    return(
                        <button
                            className={`
                                size-4 mx-1 border rounded-full transition-all duration-500
                                ${carouselIndex === index ? 'bg-white' : 'bg-black'}
                                `}
                        >
                        </button>
                    )
                })}
            </div>
            <div className="w-[400px] flex justify-center gap-4 text-3xl">
                <button onClick={() => turnLeft()}>&larr;</button>
                <button onClick={() => turnRight()}>&rarr;</button>
            </div>
        </container>
    )
}