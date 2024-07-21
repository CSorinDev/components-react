import Article from "../article"
import { Link } from "react-router-dom"

export default function Header1() {
    const menu = [
        { title: "Home", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact" },
    ]

    return(
        <Article title="Header 1" code="ok">
            <header className="w-[calc(100vw-400px)] h-12 bg-blue-500 flex justify-center items-center text-white shadow-md shadow-black">
                {menu.map((item, index) => {
                    return(
                        <Link 
                            className="py-2 px-4 text-xl"
                            key={index}
                            url={item.path}>
                            {item.title}
                        </Link>
                    )
                })}
            </header>
        </Article>
    )
}