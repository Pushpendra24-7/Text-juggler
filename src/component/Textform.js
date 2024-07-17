import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);


    }
    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);


    }
    const handleClearClick = () =>{

        let newText = '';
        setText(newText);


    }
    const handleOnChange = (event) =>{
        console.log("Text is updated")
        setText(event.target.value);

    }
    const[text , setText] = useState('')  ; 
  return ( <>
    <div className='container'>
      <h1>{props.heading } </h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter Anything...' id="Text area" rows="8"></textarea>

</div>
<button type="button" onClick={handleUpClick} className="btn btn-outline-info">UPPER_CASE</button>
<button type="button" onClick={handleLoClick} className="btn btn-outline-info mx-4">lower_case</button>
    </div>
    <div className='container my-4'>
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <button type="button" onClick={handleClearClick} className="btn btn-outline-info">Clear All</button>
    </div>

</>  )
}
