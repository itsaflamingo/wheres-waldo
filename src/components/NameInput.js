import React from "react"

function NameInput(props) {

    const {onChange, onFormSubmit, input} = props;
    return(
        <div id='enter-name'>
            Enter your name: 
            <form>
                <input type='text'
                onChange={(e) => onChange(e)}
                value={input.name}></input>
            </form>
            <button type='submit' onClick={(e) => onFormSubmit(e)}>Submit</button>
        </div>
    )
}

export default NameInput;