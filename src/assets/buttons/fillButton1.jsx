import Article from "../article";

export default function FillButton1() {
    return (
        <Article 
            title="Fill button 1"
            code={`<button
    className="border-2 py-2 px-6 relative rounded-lg
    after:bg-blue-500 after:content-[''] after:absolute after:py-2 after:top-0 after:left-0
    after:overflow-hidden after:origin-left after:mx-auto after:w-full after:scale-0
    hover:after:scale-100 hover:after:px-6 after:transition-all after:h-full after:rounded-lg
    ">
        <span className="z-10 relative">
            Button
        </span>
</button>`}>
            <button
                className="border-2 py-2 px-6 relative rounded-lg
                after:bg-blue-500 after:content-[''] after:absolute after:py-2 after:top-0 after:left-0
                after:overflow-hidden after:origin-left after:mx-auto after:w-full after:scale-0
                hover:after:scale-100 hover:after:px-6 after:transition-all after:h-full after:rounded-lg
                ">
                    <span className="z-10 relative">
                        Button
                    </span>
            </button>
        </Article>
    )
}