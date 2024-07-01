import logo from './logo.svg';
import './App.css';
import Component from './Component/Component';
import One from './Component/One';
import Two from './Component/Two';
import Three from './Component/Three';
import Four from './Component/Four';
import Five from './Component/Five';
import OurApp from './ChatApp/OurApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './ChatApp/Chat';
import Practise from './Practise/Practise';
import Practise2 from './Practise/Practise2';
import Practise3 from './Practise/Practise3';
import Practise4 from './Practise/Practise4';
function App() {
  return (
    // <div className="App">
    <div >

      {/* <Component></Component> */}
      {/* <One></One> */}
      {/* <Two></Two> */}
      {/* <Three></Three> */}
      {/* <Four></Four> */}
      {/* <Five></Five> */}
      {/* ********************** */}
      {/* <OurApp></OurApp> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OurApp></OurApp>}></Route>
          <Route path='/chat' element={<Chat></Chat>}></Route>

        </Routes>
      </BrowserRouter>

      {/* <Practise></Practise> */}
      {/* <Practise2></Practise2> */}
      {/* <Practise3></Practise3> */}
      {/* <Practise4></Practise4> */}

    </div>
  );
}

export default App;
