export default function SkreButton2() {
    return (
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <button className="
                relative border-2 rounded-lg py-2 px-10 overflow-hidden
                after:absolute after:content-[''] after:bg-blue-500 after:origin-left after:h-full after:w-0 after:-left-4 after:top-0 after:-skew-x-[35deg] after:scale-125 after:transition-all after:duration-300
                hover:after:w-full
                ">
                    <span className="z-10 relative">
                        Button 2
                    </span>
            </button>
        </article>
    )
}