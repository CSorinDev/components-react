import { useState } from "react"

export default function Hamburger8() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 8</h1>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative mt-2 left-1/2 right-1/2 -translate-x-1/2 transition-all
                    ${hamburgerSwitch ? 'rotate-90' : 'rotate-0 delay-500'}
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] opacity-0 delay-300' : 'top-[5px] delay-300'}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? 'rotate-45 delay-500 ' : 'rotate-0 '}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? '-rotate-45 delay-500 ' : 'rotate-0 '}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] opacity-0 delay-300' : 'top-[25px] delay-300'}
                        `}
                ></div>
            </button>
        </article>
    )
}
