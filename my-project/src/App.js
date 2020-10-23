import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Reviewpage from "./components/Review/Reviewpage"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
    let authorNames = [
        {authorName: 'Алексей Иванов, г. Барнаул'},
        {authorName: 'Валентина Петрова, г. Смоленск'},
        {authorName: 'Петр Кузнецов, г. Волгоград'},
        {authorName: 'Виктор Степанов, г. Владивосток'}
    ]


  return (
      <BrowserRouter>
    <div class='app-wrapper'>
        <Header />
        <Navbar />
        <div class='content'>
        <Route path='/Dialogs' render={ () => <Dialogs />} />
        <Route path='/MainPage' render={ () => <MainPage />} />
        <Route path='/ReviewPage' render={ () => <Reviewpage authorNames={authorNames} />} />
        </div>

    </div>
    </BrowserRouter>
)
}

export default App;

