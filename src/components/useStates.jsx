import { useState } from "react";

function Best() {
const [InputValue,setInputValue] = useState(0);

function onChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);

}
return (
    <>
    <input placeholder="Enter somaething..." onChange={onChange}/>
    {input}
    </> 
)
}

export default Best;