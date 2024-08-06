import { useState } from "react"
import Article from "../article"

export default function Hamburger7() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article
            title="Hamburger 7"
            code={`import { useState } from "react"

export default function HamburgerButton() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <button 
            onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
            className={
                hamburgerSwitch
                ? 'size-[35px] relative transition-all duration-500 rotate-[360deg]'
                : 'size-[35px] relative transition-all duration-500'
            }>
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
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch
                    ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-300'
                    : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
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
                className={
                    hamburgerSwitch
                    ? 'size-[35px] relative transition-all duration-500 rotate-[360deg]'
                    : 'size-[35px] relative transition-all duration-500'
                }>
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
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-300'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
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
