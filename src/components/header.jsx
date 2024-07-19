import { Link } from "react-router-dom"

export default function Header() {
    const menu = [
        { name: 'home', path: '/' },
        { name: 'buttons', path: '/buttons' },
        { name: 'carousels', path: '/carousels' },
    ]

    return(
        <header className="fixed top-0 left-0 w-[300px] h-svh flex flex-col">
            <h1 className="text-3xl text-center underline mt-4">React</h1>
            <h1 className="text-3xl text-center underline mb-4">Components</h1>
            {menu.map((item, index) => {
                return(
                    <Link 
                        to={item.path} 
                        key={index}
                        >{item.name}
                    </Link>
                )
            })}
        </header>
    )
}