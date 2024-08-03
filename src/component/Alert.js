import React from 'react'

export default function Alert(props) {

  return (
    props.aler && <div class="alert alert-primary alert-dismissible fade show" role="alert">
  <strong>{props.aler}</strong>
 
</div>
      

   
  )
}


