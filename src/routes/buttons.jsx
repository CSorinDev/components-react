import Hamburger1 from "../assets/buttons/hamburger1";
import Hamburger2 from "../assets/buttons/hamburger2";
import Hamburger3 from "../assets/buttons/hamburger3";
import Layout from "../layouts/layout";

export default function Buttons() {
    return (
        <Layout>
            <section className="flex gap-4">
                <Hamburger1 />
                <Hamburger2 />
                <Hamburger3 />
            </section>
        </Layout>
    )
}