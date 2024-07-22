import Header1 from "../assets/headers/header1";
import Header2 from "../assets/headers/header2";
import Layout from "../layouts/layout";

export default function Headers() {
    return(
            <section className="flex flex-col gap-8">
                <h1 className="text-xl font-semibold underline">Horizontal headers</h1>
                <Header1 />
                <Header2 />
                <hr />
            </section>
    )
}