import Article from "../article";

export default function Loader2() {
    return(
        <Article
            title="Loader 2"
            code={`<div className="animate-pulse">
    Loading ...
</div>`}>
                <div className="animate-pulse">
                    Loading ...
                </div>
        </Article>
    )
}