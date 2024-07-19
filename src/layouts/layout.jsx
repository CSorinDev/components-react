import PropTypes from "prop-types"
import Header from "../components/header";

export default function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="ml-[300px] p-4">
                {children}
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};