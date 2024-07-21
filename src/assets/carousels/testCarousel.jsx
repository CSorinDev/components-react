import { useState } from "react"

export default function Carousel3() {
    const [carouselIndex, setCarouselIndex] = useState(0)

    const turnLeft = () => {
        setCarouselIndex(carouselIndex === 0 ? carousel.length - 1 : carouselIndex - 1)
    }
    const turnRight = () => {
        setCarouselIndex(carouselIndex === carousel.length - 1 ? 0 : carouselIndex + 1)
    }

    const carousel = [
        '/img4.webp',
        '/img3.avif',
        '/img2.avif',
        '/img1.webp',
    ]
    
    return(
        <container>
            <section className="relative border w-[400px] aspect-video rounded-lg overflow-hidden">
                <div 
                    style={{ transform: 'translateX(-' + carouselIndex * 100 + '%)'}}
                    className="absolute flex transition-all duration-500">
                    {carousel.map((item, index) => {
                        return (
                            <img 
                                className="w-[400px] aspect-video object-cover" 
                                src={item} alt={'Carousel item' + carouselIndex + 1} 
                                key={index}/>
                        )
                    })}
                </div>
            </section>
            <section className="w-[400px] flex justify-center gap-1 my-2">
                {carousel.map((item, index) => {
                    return(
                        <button
                            key={index}
                            onClick={() => setCarouselIndex(index)}
                            className={
                                carouselIndex === index
                                ? 'size-4 mx-1 border border-black rounded-full transition-all duration-500 bg-black'
                                : 'size-4 mx-1 border border-black rounded-full transition-all duration-500'
                            }>
                        </button>
                    )
                })}
            </section>
            <section className="w-[400px] flex justify-center gap-4 text-3xl">
                <button onClick={() => turnLeft()}>&larr;</button>
                <button onClick={() => turnRight()}>&rarr;</button>
            </section>
        </container>
    )
}