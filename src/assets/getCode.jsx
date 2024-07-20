export default function GetCode({codeToCopy}) {
    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(codeToCopy);
        alert(codeToCopy);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    };
  
    return (
      <button onClick={handleCopyClick} aria-label="Copy Code">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
    );
  }
  