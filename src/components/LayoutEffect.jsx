import { useLayoutEffect, useEffect } from "react";

function LayoutEffectTutorial () {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log("inputRef.current.value ");
    },[]);


    useEffect(() =>{
        //console.log("useEffect");
     inputRef.current.value = "hello";
    },[]);

    return <div></div>
}

export default LayoutEffectTutorial;