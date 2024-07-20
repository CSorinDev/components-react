import Hamburger1 from "../assets/buttons/hamburger1";
import Hamburger2 from "../assets/buttons/hamburger2";
import Hamburger3 from "../assets/buttons/hamburger3";
import Hamburger4 from "../assets/buttons/hamburger4";
import Layout from "../layouts/layout";

export default function Buttons() {
    return (
        <Layout>
            <section className="flex gap-4 whitespace-nowrap">
                <Hamburger1 />
                <Hamburger2 />
                <Hamburger3 />
                <Hamburger4 />
            </section>
        </Layout>
    )
}