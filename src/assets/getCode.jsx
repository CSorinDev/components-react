import { useState } from "react"
export default function GetCode({codeToCopy}) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(codeToCopy);
        setIsCopied(true);
        setTimeout(() => { setIsCopied(false); }, 500);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    };
  
    return (
      <>
        <button className="relative" onClick={handleCopyClick} aria-label="Copy Code">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span className={
              isCopied 
              ? "absolute origin-bottom-left bottom-1/2 left-1/2 z-10 w-max h-max transition-all duration-75 text-white bg-green-500 rounded-lg py-2 px-4" 
              : "absolute origin-bottom-left bottom-1/2 left-1/2 z-10 w-max h-max transition-all duration-75 text-white bg-green-500 rounded-lg py-2 px-4 scale-0"
          }>
              Copied to clipboard
          </span>
        </button>
      </>
    );
  }
  