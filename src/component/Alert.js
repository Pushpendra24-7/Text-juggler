import React from 'react'

export default function Alert(props) {

  return (<div style={{height:"50px"}}>

    {props.aler && <div className="alert alert-primary alert-dismissible fade show" role="alert">
  <strong>{props.aler}</strong>
 
  </div> }
</div>
      

   
  )
}


