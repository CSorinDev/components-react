import Header from "../components/header";
import Footer from "../components/footer";
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
            <img className="absolute bottom-4 left-4 fill-black shadow-md shadow-black size-12 bg-red-500" src="/dev.png" alt='Logo'/>
        </>
    )
}
