import { useState } from "react"

export default function Hamburger6() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 6</h1>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative mt-2 left-1/2 right-1/2 -translate-x-1/2
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] opacity-0 ' : 'opacity-1 top-[5px] delay-300'}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? 'rotate-[calc(45deg+90deg)] delay-300 ' : 'rotate-0 '}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? '-rotate-[calc(45deg+90deg)] delay-300 ' : 'rotate-0 '}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] opacity-0' : 'opacity-1 top-[25px] delay-300'}
                        `}
                ></div>
            </button>
        </article>
    )
}
