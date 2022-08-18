import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import List from './Components/List';
import Favorites from './Components/Favorites';
import ListDetails from './Components/ListDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">    
    <Header />
     <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list/:id" element={<ListDetails/>} />
        <Route path="favoritos" element={<Favorites />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
