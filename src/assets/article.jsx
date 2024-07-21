import GetCode from "./getCode"

export default function Article({title, code, children}) {
    return(
        <article className="p-4 w-fit bg-gray-100 text-black border shadow-md shadow-gray-500 rounded-lg flex flex-col items-center">    
            <div className="flex justify-between w-full gap-8 mt-2 mb-4">
                <h1 className="font-semibold">{title}</h1>
                <GetCode codeToCopy={code}  />
            </div>
            {children}
        </article>
    )
}