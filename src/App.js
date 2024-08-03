import logo from './logo.svg';

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';


function App() {
  const[mode , setMode] = useState('light');

  const[alert , setalert] = useState(null);
 
  const showAlert = (msg) => {
 setalert(msg);
 
setTimeout(() =>{ 
  setalert(null);}
  ,2000);

  }

  const toggleMode = () =>{
    if (mode === "dark"){
   
      setMode('light');
      document.body.style.backgroundColor = "aqua"
      showAlert("Light mode enabled");
      
      setInterval(()=>{document.title="VIRUS DETECTED"}, 500);
      setInterval(()=>{document.title="INSTAll Now"}, 1000)
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#00003f" ; 
      showAlert("Dark Mode Enabled") ;
    }
  }
  return (
  <>
   <Navbar title="Text Juggler" mode={mode} toggleMode={toggleMode}/>
   <Alert aler={alert} />
  <div className='container my-3' >

         
      <Textform heading="Need a word Makeover ?" mode={mode} />
        
      

  </div>
   
       <About mode={mode}/>

     

   </>
  );
}

export default App;
