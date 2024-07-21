import { useState } from "react"
import Article from "../article"

export default function Hamburger8() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article
            title="Hamburger 8"
            code={`<button 
    onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
    className="size-[35px] relative">
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0 delay-300'
            : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] delay-300'
        }>
    </div>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-45 delay-500'
            : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
        }>
    </div>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-500'
            : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
        }>
    </div>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0 delay-300'
            : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] delay-300'
        }>
    </div>
</button>`}>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className={
                    hamburgerSwitch
                    ? 'size-[35px] relative transition-all rotate-90'
                    : 'size-[35px] relative transition-all rotate-0 delay-500'
                }>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0 delay-300'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] delay-300'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center rotate-45 delay-500'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center -rotate-45 delay-500'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] opacity-0 delay-300'
                        : 'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] delay-300'
                    }>
                </div>
            </button>
        </Article>
    )
}
