import { useState } from "react"

export default function Hamburger3() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 3</h1>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative mt-2 left-1/2 right-1/2 -translate-x-1/2
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] rotate-[calc(45deg+180deg)] bg-red-500' : 'top-[5px] rotate-0 bg-white'}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? 'opacity-0' : 'opacity-1' }
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] rounded-full absolute 
                        ${hamburgerSwitch ? 'top-[15px] -rotate-[calc(45deg+180deg)] bg-red-500' : 'top-[25px] rotate-0 bg-white'}
                        `}
                ></div>
            </button>
        </article>
    )
}