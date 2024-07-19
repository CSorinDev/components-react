import PropTypes from "prop-types"
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="ml-[300px] mb-8 p-4">
                <h1 className="text-xl my-4 text-center">Click to see the code!</h1>
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};