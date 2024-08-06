import Article from "../article"

export default function Loader3() {
    return(
        <Article
            title="Loader 3"
            code={`export default function Loader() {
    return(
        <div className="flex flex-col items-center">
            <div>
                Loading
            </div>
            <div
                className="size-6 border-4 border-dotted rounded-full border-l-black border-t-gray-600 border-r-gray-300 border-b-gray-100 animate-spin"
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
                className="size-6 border-4 border-dotted rounded-full border-l-black border-t-gray-600 border-r-gray-300 border-b-gray-100 animate-spin"
                >
            </div>
        </div>
        </Article>
    )
}