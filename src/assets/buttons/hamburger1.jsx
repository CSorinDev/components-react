import { useState } from "react"

export default function Hamburger1() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 1</h1>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] rotate-45' : 'top-[5px] rotate-0'}
                        `}
                ></div>
                <div
                    className={`
                        transition-all h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? 'w-[0]' : 'w-[35px]' }
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute 
                        ${hamburgerSwitch ? 'top-[15px] -rotate-45' : 'top-[25px] rotate-0'}
                        `}
                ></div>
            </button>
        </article>
    )
}