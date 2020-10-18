import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div class='app-wrapper'>
        <Header />
        <Navbar />
        <div class='content'>
        <Route path='/MainPage' component={MainPage} />
        <Route path='/ReviewPage' component={Reviewpage} />
        </div>

    </div>
    </BrowserRouter>
)
}

export default App;

