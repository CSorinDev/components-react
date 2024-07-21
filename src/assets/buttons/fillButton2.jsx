import Article from "../article";

export default function FillButton2() {
    return (
        <Article 
            title='Fill Button 2'
            code={`<button 
    className="
        relative border-2 border-black bg-white rounded-lg py-2 px-10 overflow-hidden
        after:absolute after:content-[''] after:bg-blue-500 after:origin-left after:h-full after:w-0 after:-left-4 after:top-0 after:-skew-x-[35deg] after:scale-125 after:transition-all after:duration-300
        hover:after:w-full
        ">
    <span className="z-10 relative">
        Button 2
    </span>
</button>`}>
            <button className="
                relative border-2 border-black bg-white rounded-lg py-2 px-10 overflow-hidden
                after:absolute after:content-[''] after:bg-blue-500 after:origin-left after:h-full after:w-0 after:-left-4 after:top-0 after:-skew-x-[35deg] after:scale-125 after:transition-all after:duration-300
                hover:after:w-full
                ">
            <span className="z-10 relative">
                Button 2
            </span>
            </button>
        </Article>
    )
}