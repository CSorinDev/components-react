import GetCode from "./getCode"

export default function Article({title, code, children}) {
    return(
        <article className="p-4 w-fit text-white border shadow-sm shadow-white flex flex-col items-center">    
            <div className="flex justify-between gap-8 my-2">
                <h1>{title}</h1>
                <GetCode codeToCopy={code}  />
            </div>
            {children}
        </article>
    )
}