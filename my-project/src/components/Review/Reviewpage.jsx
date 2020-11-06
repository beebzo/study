import React from 'react';
import classes from './Components/Reviewpage.module.css'
import like from './Components/like.png'
import dislike from './Components/dislike.png'
import likecount from "./Components/Like";
import Reviews from "./Reviews";

const Reviewpage = (props) => {
    return (
            <div>
                <Reviews reviews={props.state.reviews}
                         newReviewText={props.state.newReviewText}
                         dispatch={props.dispatch}
                />
            </div>
    )
}

export default Reviewpage