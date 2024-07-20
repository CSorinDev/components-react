import Hamburger1 from "../assets/buttons/hamburger1";
import Hamburger2 from "../assets/buttons/hamburger2";
import Hamburger3 from "../assets/buttons/hamburger3";
import Hamburger4 from "../assets/buttons/hamburger4";
import Hamburger5 from "../assets/buttons/hamburger5";
import Hamburger6 from "../assets/buttons/hamburger6";
import Hamburger7 from "../assets/buttons/hamburger7";
import Hamburger8 from "../assets/buttons/hamburger8";
import Layout from "../layouts/layout";

export default function Buttons() {
    return (
        <Layout>
            <section className="flex gap-4 whitespace-nowrap">
                <Hamburger1 />
                <Hamburger2 />
                <Hamburger3 />
                <Hamburger4 />
                <Hamburger5 />
                <Hamburger6 />
                <Hamburger7 />
                <Hamburger8 />
            </section>
        </Layout>
    )
}