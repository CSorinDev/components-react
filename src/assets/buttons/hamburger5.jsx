import { useState } from "react"
import Article from "../article"

export default function Hamburger5() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article
            title="Hamburger 5"
            code={`import { useState } from "react"

export default function HamburgerButton() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <button 
            onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
            className="size-[35px] relative">
            <div
                className={
                    hamburgerSwitch
                    ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0'
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] delay-300'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch
                    ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-45 delay-300'
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-0'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch
                    ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-300'
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-0'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch
                    ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0'
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] delay-300'
                }>
            </div>
        </button>
    )
}`}>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className="size-[35px] relative">
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] delay-300'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-45 delay-300'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-0'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-300'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-0'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] delay-300'
                    }>
                </div>
            </button>
        </Article>
    )
}
