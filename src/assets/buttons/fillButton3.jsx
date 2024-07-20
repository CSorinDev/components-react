export default function FillButton3() {
    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <button
                className="
                    relative border-2 py-2 px-6 -skew-x-[30deg] overflow-
                    after:absolute after:content-[''] after:bg-blue-500 after:h-full after:w-0 after:origin-left after:top-0 after:left-0 after:transition-all
                    hover:after:w-full
                "
                >
                <h1 className="relative z-10 skew-x-[30deg]">Filling Button 3</h1>
            </button>
        </article>
    )
}