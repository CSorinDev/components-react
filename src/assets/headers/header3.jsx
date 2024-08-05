import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header3() {
    const [showMenu, setShowMenu] = useState(false)

    const menu = [
        { title: "Home", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 w-full h-12 bg-blue-500 flex items-center justify-end text-white">
            <button 
                onClick={() => setShowMenu(!showMenu)}
                className="size-9 relative"
            >
                <div
                    className={
                        showMenu
                        ? 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 top-1/2 rotate-45'
                        : 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 top-1/4'
                    }
                ></div>
                <div
                    className={
                        showMenu
                        ? 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 scale-0'
                        : 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 top-1/2'
                    }
                ></div>
                <div
                    className={
                        showMenu
                        ? 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 top-1/2 -rotate-45'
                        : 'w-full h-1 bg-black rounded-full absolute transition-all duration-100 top-3/4'
                    }
                ></div>
            </button>
            <nav className={
                showMenu
                ? 'absolute top-12 right-0 w-1/2 h-full bg-white'
                : 'absolute top-12 right-[-100%]'
            }>
                {menu.map((item, index) => {
                    return(
                        <Link
                            key={index}
                            url={item.path}
                            className="py-2 px-4 text-xl"
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}