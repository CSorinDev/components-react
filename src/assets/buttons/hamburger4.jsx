import { useState } from "react"

export default function Hamburger4() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white">
            <h1>Hamburger 4</h1>
            <button 
                id='hbBtn'
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={`
                    size-[35px] relative mt-2 left-1/2 right-1/2 -translate-x-1/2
                `}>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[5px] origin-right
                        ${hamburgerSwitch ? 'scale-0' : 'scale-1 delay-300'}
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center
                        ${hamburgerSwitch ? 'rotate-45 delay-300' : 'rotate-0' }
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] origin-center
                        ${hamburgerSwitch ? '-rotate-45 delay-300' : 'rotate-0' }
                        `}
                ></div>
                <div
                    className={`
                        transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[25px] origin-left
                        ${hamburgerSwitch ? 'scale-0' : 'scale-1 delay-300'}
                        `}
                ></div>
            </button>
        </article>
    )
}
