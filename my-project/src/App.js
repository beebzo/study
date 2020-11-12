import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='content'>
                <Route path='/dialogs' render={ () => <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch} /> }/>
                <Route path='/mainPage' render={ () => <MainPage />} />
                <Route path='/reviewPage' render={ () => <Reviewpage
                    state={props.state.reviewPage}
                    dispatch={props.dispatch}
                            /> }/>
                <Route path='/Profile' render={ () => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch} /> }/>
            </div>
        </div>
)
}

export default App;

