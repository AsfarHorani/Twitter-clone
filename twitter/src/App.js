
import './App.css';
import Main from './pages/main/main'
import React from 'react';
import ComposeTweet from './pages/ComposeTweet/ComposeTweet';
import { Routes, Route } from "react-router-dom"
function App() {
  
  return (


    <div className="App">
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/compose-tweet"  element={<ComposeTweet/>}/>
      </Routes>
    </div>
  );
}

export default App;
