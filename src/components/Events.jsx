//Events are just what you want to happen to your component for instance the clicking of the button,moving a muouse e.t.c

function ClickButton() {

 

    return (
        <>
        <button onClick={handleClick}>
            Click here
        </button>
        </>
    )

    function handleClick() {
        console.log("Clicked success");
    }
}

export default ClickButton
