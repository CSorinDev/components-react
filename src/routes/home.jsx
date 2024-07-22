import { Outlet } from "react-router-dom";
import Layout from "../layouts/layout";

export default function Home() {
    return(
        <Layout>
            <Outlet />
        </Layout>
    )
}