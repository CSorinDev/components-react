import Article from "../article";

export default function Loader4() {
    return(
        <Article
        title='Loader 4'
        code={`export default function Loading() {
    return(
        <div className="animate-bounce">
            Loading ...
        </div>
    )
}`}>
            <div className="animate-bounce">
                Loading ...
            </div>
        </Article>
    )
}