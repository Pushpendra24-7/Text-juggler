import logo from './logo.svg';

import Navbar from './component/Navbar';
import Textform from './component/Textform';


function App() {
  return (
  <>
   <Navbar title="Text Juggler"/>
  <div className='container my-3' >
   <Textform heading="Need a word Makeover ?"/>

  </div>
  </>
  );
}

export default App;
