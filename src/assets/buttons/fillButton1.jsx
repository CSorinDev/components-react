import GetCode from "../getCode";

export default function FillButton1() {
    const code = `
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
`
    console.log(code)

    return (
        <article className="p-4 w-fit text-white border shadow-sm shadow-white flex flex-col items-center">    
            <div className="flex justify-between gap-8 my-2">
                <h1>Fill Button 1</h1>
                <GetCode codeToCopy={code}  />
            </div>
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