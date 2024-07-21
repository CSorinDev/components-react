import Article from "../article.jsx"
import { useState } from "react"

export default function Hamburger1() {
    const [hamburgerSwitch, setHamburgerSwitch ] = useState(false)

    return(
        <Article title='Hamburger 1'
        code={`<button 
    onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
    className='size-[35px] relative'>
    <div
        className={
            hamburgerSwitch ? 
            'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] rotate-45' :
            'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[5px] rotate-0'
        }
    ></div>
    <div
        className={
            hamburgerSwitch ?
            'transition-all h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center w-[0]' :
            'transition-all h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center w-[35px]'

        }>
    </div>
    <div
        className={
            hamburgerSwitch ?
            'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] -rotate-45' :
            'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[25px] rotate-0'
        }
    ></div>
</button>`}>
            <button 
                onClick={() => setHamburgerSwitch(!hamburgerSwitch)}
                className='size-[35px] relative'>
                <div
                    className={
                        hamburgerSwitch ? 
                        'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] rotate-45' :
                        'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[5px] rotate-0'
                    }
                ></div>
                <div
                    className={
                        hamburgerSwitch ?
                        'transition-all h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center w-[0]' :
                        'transition-all h-[5px] bg-white rounded-full absolute top-[15px] mx-auto origin-center w-[35px]'

                    }>
                </div>
                <div
                    className={
                        hamburgerSwitch ?
                        'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[15px] -rotate-45' :
                        'transition-all w-[35px] h-[5px] bg-white rounded-full absolute top-[25px] rotate-0'
                    }
                ></div>
            </button>
        </Article>
    )
}