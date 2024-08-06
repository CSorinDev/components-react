import Article from "../article";

export default function Loader1() {
    return (
        <Article 
            title="Loader 1"
            code={`export default function Loader() {
    return(
        <div className="flex flex-col items-center">
            <div>
                Loading
            </div>
            <div
                className="size-6 border-4 border-black/10 border-l-black rounded-full animate-spin"
                >
            </div>
        </div>
    )
}`}>
                <div className="flex flex-col items-center">
                    <div>
                        Loading
                    </div>
                    <div
                        className="size-6 border-4 border-black/10 border-l-black rounded-full animate-spin"
                        >
                    </div>
                </div>
        </Article>
    )
}