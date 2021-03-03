import React, { useState } from 'react';
import '../Styles/Input.css';

//this component will be exported and ran in the app js file

const Input = () => {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const AddInput = () =>{
        const inputs = JSON.parse(localStorage.getItem('questions')) || []
        const updatedQuestions = [input, ...inputs]
        localStorage.setItem("questions", JSON.stringify(updatedQuestions))
    }

    return(
        <div className="middlepanel">
                <h4>What's your question?</h4>
                <input onChange={handleChange} type="text" id="input-1" name="input"></input>
                <button onClick={AddInput} name="Submit" id="btn-1">Submit</button>
        </div>
    )
}

export default Input;