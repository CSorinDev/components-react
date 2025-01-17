import Article from "../article.jsx"
import { useState } from "react"

export default function Hamburger2() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article
            title='Hamburger 2'
            code={`import { useState } from "react"

export default function HamburgerButton() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <button 
            onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
            className='size-[35px] relative'>
            <div
                className={
                    hamburgerSwitch ?
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] rotate-[calc(45deg+180deg)]' :
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] rotate-0'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch ?
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center opacity-0' :
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                }>
            </div>
            <div
                className={
                    hamburgerSwitch ?
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] -rotate-[calc(45deg+180deg)]' :
                    'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] rotate-0'
                }>
            </div>
        </button>
    )
}`}>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className='size-[35px] relative'>
                <div
                    className={
                        hamburgerSwitch ?
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] rotate-[calc(45deg+180deg)]' :
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[5px] rotate-0'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch ?
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center opacity-0' :
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] mx-auto origin-center'
                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch ?
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[15px] -rotate-[calc(45deg+180deg)]' :
                        'transition-all w-[35px] h-[5px] bg-black rounded-full absolute top-[25px] rotate-0'
                    }>
                </div>
            </button>
        </Article>
    )
}