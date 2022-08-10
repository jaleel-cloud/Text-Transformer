import React, { useState } from 'react'
import "./Form.css"

export const Form = (props) => {
    // TextArea("whars is your name")
    let handleClick = () => {
        let newText = text.toUpperCase()
        // console.log("uppercase" + Text);
            setText(newText);
    
    }
    let handleLowClick = () => {
        let newText = text.toLowerCase()
        // console.log("uppercase" + Text);
        setText(newText);
    }
   let handleClearClick = ()=>{
    let newText = " ";
    setText(newText);
   }
   let handleCapClick =()=>{
     let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
   }
    const changeEvent = (event) => {
        setText(event.target.value);
    }
    const handleCopyClick=()=>{
        let newText = document.getElementById("box")
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }
    const handleSpacesClick =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="Container" >
            <div className="form">
                <form action="" className='form-container'>
                    <div className="heading">
                        <h1>Write the Text below:</h1>
                    </div>
                    <textarea  class="textArea" placeholder='Enter your Text' name="" id="box" cols="80" rows="20" value={text} onChange={changeEvent}></textarea>
                    <div className="button-container">
                        <button id='btn' onClick={handleClick} type="button">Convert to UpperCase</button>
                        <button id='btn' onClick={handleLowClick} type="button">ConvertS to LowerCase</button>
                        <button id='btn' onClick={handleClearClick} type="button">Clear TextArea</button>
                        <button id='btn' onClick={handleCapClick} type="button">Capitalize</button>
                        <button id='btn' onClick={handleCopyClick} type="button">click to copy</button>
                        <button id='btn' onClick={handleSpacesClick} type="button">Remove extra space</button>
                         
                    </div>


                </form>
            </div>
        </div>
        <div className="container2">
            <h2>Your text Summary</h2>
            <h3>Total words and Characters :</h3>
             <h4>{text.split(" ").length}  words and {text.length}characters</h4>
           <p>A person can read this {text.split("").length} words and {text.length} characters in {0.008* text.split(" ").length} minutes</p>
           
        </div>
        </>
    )
}
