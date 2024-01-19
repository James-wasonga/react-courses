import { useRef } from "react";

function RefTutorial() { 
    const inputRef = useRef(null);

 const onClick=() => {
    console.log(inputRef.current.value);
    //showing changes in the input upon clicking a button

    inputRef.current.focus();

    inputRef.current.value = ""; //this clears the value within the input appone clicking the .   button

    }
    return(
        <>
         <input type="text" placeholder="name..." ref={inputRef}/>
        <button onClick={onClick}> Change Name </button>
        </>
    ) 
}

export default RefTutorial;