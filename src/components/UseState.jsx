//here we perform the useState that enables one to perform a given function for instance the number of times you want to click and display the button e.t.c
//first we import useSate from react

import { useState } from "react";

function MyBtn() {
    const [count,setCount] = useState();// the count shows the current state of the component while the setCount is a function that allows updating the component


    function handleClick() {
        setCount(count+ 1);
    }
return (
    <button onclick={handleClick}>
        click here
    </button>
)
}

export default MyBtn