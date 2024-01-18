import { useEffect, useState } from "react"; 
//common  library for making api calls
import axios from "axios"; 

function EfectTutuorial() {
    const[data,setData] = useState("");
    //adding the count
    const[count,setCount] = useState(0);
     
    useEffect(() => {
        axios.get("").then((response) =>{
            setData(response.data[0].email);
            console.log("API WAS CALLED");

        });
    },[]);

    // function handleClick() {
    //     setCount(count+1);
    // } 

    return(
        <>
        <h1>Hello World</h1>
        <h1>Data</h1>
        <button
         onClick={()=>{
            setCount(count+1);
        }}>
            Click
        </button>
        </>
    )
};

export default EffectTutorial;     