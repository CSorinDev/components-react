import Header from "../components/header";
import CopyIcon from "../assets/icons/copyIcon";

export default function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="ml-[300px] mb-8 p-8">
                <h1 className="text-2xl my-4 flex justify-center items-center whitespace-nowrap">
                    Click &nbsp; <CopyIcon /> &nbsp; to copy the code!
                </h1>
                {children}
            </main>
        </>
    )
}
