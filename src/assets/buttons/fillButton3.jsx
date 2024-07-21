import Article from "../article";

export default function FillButton3() {
    return(
        <Article 
            title='Fill Button 3'
            code={`<button
    className="
        relative border-2 border-black bg-white py-2 px-6 -skew-x-[30deg] overflow-
        after:absolute after:content-[''] after:bg-blue-500 after:h-full after:w-0 after:origin-left after:top-0 after:left-0 after:transition-all
        hover:after:w-full
    "
    >
    <h1 className="relative z-10 skew-x-[30deg]">Filling Button 3</h1>
</button>`}>
            <button
                className="
                    relative border-2 border-black bg-white py-2 px-6 -skew-x-[30deg] overflow-
                    after:absolute after:content-[''] after:bg-blue-500 after:h-full after:w-0 after:origin-left after:top-0 after:left-0 after:transition-all
                    hover:after:w-full
                "
                >
                <h1 className="relative z-10 skew-x-[30deg]">Filling Button 3</h1>
            </button>
        </Article>
    )
}