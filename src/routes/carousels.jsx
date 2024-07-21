import Carousel1 from "../assets/carousels/carousel1";
import Carousel2 from "../assets/carousels/carousel2";
import Layout from "../layouts/layout";

export default function Carousels() {
    return(
        <Layout>
            <section className="flex gap-8 flex-wrap">
                <Carousel1 />
                <Carousel2 />
            </section>
        </Layout>
    )
}