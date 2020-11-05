import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import {addPost, addReview, updateNewReviewText} from './redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
    <App state={state}
    addPost={addPost}
    addReview={addReview}
    updateNewReviewText={updateNewReviewText}/>
    </BrowserRouter>, document.getElementById('root'));
}

subscribe(rerenderEntireTree)
rerenderEntireTree(state)