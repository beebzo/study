import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {addPost, addReview, updateNewReviewText} from "./redux/state";

const App = (props) => {
    return (
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='content'>
                <Route path='/dialogs'
                        render={ () => <Dialogs state={props.state.dialogsPage}
                        AddDialog={props.AddDialog} /> }/>
                <Route path='/mainPage' render={ () => <MainPage />} />
                <Route path='/reviewPage' render={ () => <Reviewpage
                    state={props.state.reviewPage}
                    addReview={props.addReview}
                    updateNewReviewText={props.updateNewReviewText}
                            /> }/>
                <Route path='/Profile' render={ () => <Profile
                    state={props.state.profilePage}
                    addPost={props.addPost} /> }/>
            </div>
        </div>
)
}

export default App;

