import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



function App(props) {
    return (
    <div class='app-wrapper'>
        <Header />
        <Navbar />
        <div class='content'>
        <Route path='/Dialogs' render={ () => <Dialogs {...props}
        state={props.state.dialogPage}
      />} />
        <Route path='/MainPage' render={ () => <MainPage />} />
        <Route path='/ReviewPage' render={ () => <Reviewpage {...props}
        state={props.state.reviewPage}
      />} />
        </div>
    </div>
)
}

export default App;

