import { useState } from "react";

const [count,setCount] = useState(0);

function handleClick() {
    setCount(count+1);
}


export default mybtn