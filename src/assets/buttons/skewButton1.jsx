export default function SkewButton1() {
    return (
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">    
            <button
                className="border-2 py-2 px-6 relative rounded-lg
                after:bg-blue-500 after:content-[''] after:absolute after:py-2 after:top-0 after:left-0
                ºafter:overflow-hidden after:origin-left after:mx-auto after:w-full after:scale-0
                hover:after:scale-100 hover:after:px-6 after:transition-all after:h-full after:rounded-lg
                ">
                    <span className="z-10 relative">
                        Button
                    </span>
            </button>
        </article>
    )
}