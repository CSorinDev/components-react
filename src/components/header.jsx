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
        <header className="fixed top-0 left-0 w-[300px] h-svh p-4 bg-gray-100 text-black flex flex-col border-r shadow-lg shadow-white">
            <h1 className="text-3xl text-center underline mt-4 mb-8">React <br /> Components</h1>
            {menu.map((item, index) => {
                return(
                    <Link 
                        className={`
                            relative py-2 px-4 transition-all my-2 text-xl
                            hover:text-white
                            after:content-[''] after:absolute after:w-0 after:h-full after:bg-blue-500 after:top-0 after:left-0 after:transition-all
                            hover:after:w-full
                            ${window.location.pathname === item.path && 'bg-blue-500 text-white'}
                `}
                        to={item.path} 
                        key={index}
                        >
                        <span  className="z-10 relative">
                            {item.name}
                        </span>
                    </Link>
                )
            })}
        </header>
    )
}