import { useState } from "react";

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

export default mybtn