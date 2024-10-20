import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home.js'
import NoPage from './Pages/NoPage.js';
import Play from './Pages/Play.js';

function App() {
return(
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="/play/:song" element={<Play/>}></Route>
    <Route path="*" element={<NoPage/>}/>


  </Routes>
  </BrowserRouter>
);
}

export default App;
