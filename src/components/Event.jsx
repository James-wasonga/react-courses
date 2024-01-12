function ClickButton() {

    return(
        <button onClick = {handleClick}>Click Here!</button>
    )
    function handleClick(){
        console.log('You clicked me well');
    }
}

export default ClickButton

