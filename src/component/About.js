import React, { useState } from 'react'

export default function About(props) {
    
   

    

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}}>
      <div className="accordion accordion-flush" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}} id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     What is Text Juggler?

      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}}>Text Juggler is a versatile text manipulation tool that allows users to easily edit, transform, and manage text data for various purposes.

<code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What platforms does Text Juggler support?

      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}}>Text Juggler supports Windows, macOS, and Linux operating systems.

<code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Can I use Text Juggler with large text files?

      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark' ? '#00003f':'#2db9b74a' , color: props.mode==='dark' ? 'white':'black'}}>Yes, Text Juggler is optimized to handle large text files efficiently.

<code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

    </div>
    </>
  );
}
