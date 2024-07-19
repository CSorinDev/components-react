import { useState } from "react";

export default function Carousel1() {
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
        <container className="border p-4 rounded-md bg-gray-800">
            <div className="flex justify-between mb-2">
                <h1>Carousel 1</h1>
                <p>Copy code</p>
            </div>
            <article className="relative border w-[400px] aspect-video rounded-lg overflow-hidden shadow-md shadow-black">
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
            <h1 className="w-[400px] text-center">{carouselIndex + 1} / {carousel.length}</h1>
            <div className="w-[400px] flex justify-center gap-4 text-3xl">
                <button onClick={() => turnLeft()}>&larr;</button>
                <button onClick={() => turnRight()}>&rarr;</button>
            </div>
        </container>
    )
}