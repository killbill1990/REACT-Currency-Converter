import { useState } from 'react';
import Converter from './Converter';
import Changes from './Changes'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowTypes from './ShowTypes'
import Navbar from './Navbar'

function App(props) {
  return (
  
    <div className="App">
          <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/ShowTypes" element={ <ShowTypes/> } />
        <Route path="/Changes" element={ <Changes/> } />
        <Route path="/Converter" element={ <Converter/> } />
      </Routes>
      </div>
    </div>

  );
}

export default App;
