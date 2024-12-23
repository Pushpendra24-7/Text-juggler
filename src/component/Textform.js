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
    <div className='container' style={{color: props.mode==='dark' ? 'white':'black'}}  >
      <h1>{props.heading } </h1>
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black' }}  value={text} onChange={handleOnChange} placeholder='Enter Anything...' id="Text area" rows="8"></textarea>

</div>
<button disabled={text.length===0} type="button" onClick={handleLoClick} className="btn btn-outline-info mx-2 my-1">lower_case</button>
<button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-outline-info my-1">UPPER_CASE</button>
<button disabled={text.length===0} type="button" onClick={handleClearClick} className="btn btn-outline-info mx-2 my-1">Clear All</button>
    </div>
    <div className='container my-4' style={{color: props.mode==='dark' ? 'white':'#00003f'}}>
        <h2>Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to Read</p>
        <h2>Preview</h2>    
        <p>{text.length > 0 ? text : "Enter something above"}</p>
    </div>

</>  )
}
