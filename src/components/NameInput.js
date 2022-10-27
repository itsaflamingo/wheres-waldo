import React from "react"

function NameInput(props) {

    const {onChange, onFormSubmit, input, setShowInput, endGame} = props;

    const cancel = () => {
        setShowInput(false)
        endGame(!endGame);
    }
    
    return(
        <div id='enter-name'>
            Enter your name: 
            <form>
                <input type='text'
                id='input'
                onChange={(e) => onChange(e)}
                value={input.name}></input>
            </form>
            <div id='buttons'>
                <button type='submit' onClick={(e) => onFormSubmit(e)}>Submit</button>
                <button id='cancel-submit' onClick={() => cancel()}>Cancel</button>
            </div>
        </div>
    )
}

export default NameInput;