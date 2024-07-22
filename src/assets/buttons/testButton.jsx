export default function FillButton4() {
    return(
        <>
            <button
                className="
                    relative border-2 py-2 px-4 border-black bg-white transition-all h-fit
                    hover:text-white
                    after:content-[''] after:absolute after:w-0 after:h-full after:bg-blue-500 after:top-0 after:left-0 after:transition-all
                    hover:after:w-full
                ">
                <span className="z-10 relative">
                    Fill Button 4
                </span>
            </button>
        </>
    )
}