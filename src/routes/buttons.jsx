import Hamburger1 from "../assets/buttons/hamburger1";
import Hamburger2 from "../assets/buttons/hamburger2";
import Hamburger3 from "../assets/buttons/hamburger3";
import Hamburger4 from "../assets/buttons/hamburger4";
import Hamburger5 from "../assets/buttons/hamburger5";
import Hamburger6 from "../assets/buttons/hamburger6";
import Hamburger7 from "../assets/buttons/hamburger7";
import Hamburger8 from "../assets/buttons/hamburger8";
import Layout from "../layouts/layout";
import FillButton1 from "../assets/buttons/fillButton1";
import FillButton2 from "../assets/buttons/fillButton2";
import FillButton3 from "../assets/buttons/fillButton3";
import FillButton4 from "../assets/buttons/fillButton4";
import TestButton from "../assets/buttons/testButton";

export default function Buttons() {
    return (
        <section>
            <h1 className="my-4 text-xl underline font-semibold">Hamburgers</h1>
            <section className="flex gap-4 whitespace-nowrap flex-wrap py-4">
                <Hamburger1 />
                <Hamburger2 />
                <Hamburger3 />
                <Hamburger4 />
                <Hamburger5 />
                <Hamburger6 />
                <Hamburger7 />
                <Hamburger8 />
            </section>
            <hr className="my-4" />
            <h1 className="my-4 text-xl underline font-semibold">Filling Buttons</h1>
            <section className="flex gap-4 whitespace-nowrap flex-wrap py-4">
                <FillButton1 />
                <FillButton2 />
                <FillButton3 />
                <FillButton4 />
            </section>
        </section>
    )
}