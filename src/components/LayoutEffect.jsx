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

    return (
    <div className="App">
        <input ref={inputRef} value="PEDRO" style={{width:400,height:400}}/>
    </div>
    );
}

export default LayoutEffectTutorial;