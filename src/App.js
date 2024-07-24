import logo from './logo.svg';

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import { useState } from 'react';


function App() {
  const[mode , setMode] = useState('light');
  const toggleMode = () =>{
    if (mode === "dark"){
   
      setMode('light');
      document.body.style.backgroundColor = "aqua"
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#00003f" ; 
    }
  }
  return (
  <>
   <Navbar title="Text Juggler" mode={mode} toggleMode={toggleMode}/>
  <div className='container my-3' >
   <Textform heading="Need a word Makeover ?" mode={mode}/>
  </div>
    <About mode={mode}/>
  </>
  );
}

export default App;
