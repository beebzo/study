import React from 'react';
import Header from "./components/Header";
import './App.css';
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
function App() {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <MainPage />
    </div>
   );
}

export default App;

