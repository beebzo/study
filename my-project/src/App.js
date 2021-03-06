import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";


const App = () => {
    return (
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='content'>
                <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                <Route path='/mainPage' render={ () => <MainPage />} />
                <Route path='/reviewPage' render={ () => <Reviewpage/> }/>
                <Route path='/profile' render={ () => <Profile /> }/>
            </div>
        </div>
)
}

export default App;

