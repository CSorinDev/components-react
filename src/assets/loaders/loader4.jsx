import Article from "../article";

export default function Loader4() {
    return(
        <Article
        title='Loader 4'
        code={`export default function Loading() {
    return(
        <div className="flex gap-2 items-center">
            <span>
                Loading
            </span>
            <div
            className="size-6 border-4 border-dashed rounded-full border-black animate-spin "
            >
            </div>
        </div>
    )
}`}>
            <div className="flex gap-2 items-center">
                <span>
                    Loading
                </span>
                <div
                className="size-6 border-4 border-dashed rounded-full border-black animate-spin "
                >
                </div>
            </div>
        </Article>
    )
}