import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()

    const menu = [
        { name: 'Home', path: '/' },
        { name: 'Buttons', path: '/buttons' },
        { name: 'Carousels', path: '/carousels' },
        { name: 'Headers', path: '/headers' },
    ]

    return(
        <header className="fixed top-0 left-0 w-[300px] h-svh p-4 bg-gray-100 text-black flex flex-col border-r shadow-md shadow-black">
            <h1 className="text-3xl text-center underline mt-4 mb-8 text-pretty">
                React Components with Tailwind
            </h1>
            {menu.map((item, index) => {
                return(
                    <Link 
                        className={`
                            py-2 px-4 my-1 text-xl transition-all
                            hover:bg-blue-500 hover:text-white
                            ${location.pathname === item.path ? 'bg-blue-500 text-white' : 'no-underline'}
                            `}
                        to={item.path} 
                        key={index}
                        >
                        {item.name}
                    </Link>
                )
            })}
            <img 
                className="size-12 bg-red-500 absolute bottom-4 left-4"
                src="/dev.png" 
                alt="Dev 55 Logo" />
        </header>
    )
}