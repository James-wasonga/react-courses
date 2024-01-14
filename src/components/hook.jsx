import { useState } from "react";
function mybn () {
const [count,setCount] = useState(0);

function handleClick() {
    setCount(count+1);
}

return (
    <>

    <button count={count} onClick={handleClick}/>
    <button count={count} onClick={handleClick}/>

    </>
)
}
function mybtn({count,onClick}) {
    return (
        <button onClick={onClick}>Click {count} times</button>
    )
}
export default mybn 