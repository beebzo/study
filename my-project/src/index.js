import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/state";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
    <App state={state}
    addPost={store.addPost.bind(store)}
    addReview={store.addReview.bind(store)}
    updateNewReviewText={store.updateNewReviewText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getstate());
store.subscribe(rerenderEntireTree);