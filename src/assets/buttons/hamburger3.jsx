import { useState } from "react"
import Article from "../article"

export default function Hamburger3() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article
            title='Hamburger 3'
            code={`<button 
    onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
    className='size-[35px] relative'>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] rounded-full absolute top-[15px] rotate-[calc(45deg+180deg)] bg-red-500'
            : 'transition-all w-[35px] h-[5px] rounded-full absolute top-[5px] rotate-0 bg-white'
        }>
    </div>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center opacity-0'
            : 'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center'
        }>
    </div>
    <div
        className={
            hamburgerSwitch
            ? 'transition-all w-[35px] h-[5px] rounded-full absolute top-[15px] -rotate-[calc(45deg+180deg)] bg-red-500'
            : 'transition-all w-[35px] h-[5px] rounded-full absolute top-[25px] rotate-0 bg-white'
        }>
    </div>
</button>`}>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className='size-[35px] relative'>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] rounded-full absolute top-[15px] rotate-[calc(45deg+180deg)] bg-red-500'
                        : 'transition-all w-[35px] h-[5px] rounded-full absolute top-[5px] rotate-0 bg-white'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center opacity-0'
                        : 'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch
                        ? 'transition-all w-[35px] h-[5px] rounded-full absolute top-[15px] -rotate-[calc(45deg+180deg)] bg-red-500'
                        : 'transition-all w-[35px] h-[5px] rounded-full absolute top-[25px] rotate-0 bg-white'
                    }>
                </div>
            </button>
        </Article>
    )
}