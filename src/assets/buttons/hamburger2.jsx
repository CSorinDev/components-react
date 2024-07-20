import { useState } from "react"

export default function Hamburger2() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 2</h1>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative mt-2
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute
                        ${hamburgerSwitch ? 'top-[15px] rotate-[calc(45deg+180deg)]' : 'top-[5px] rotate-0'}
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
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute 
                        ${hamburgerSwitch ? 'top-[15px] -rotate-[calc(45deg+180deg)]' : 'top-[25px] rotate-0'}
                        `}
                ></div>
            </button>
        </article>
    )
}