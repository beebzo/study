import React from "react";
import {addReviewActionCreator, updateNewReviewTextActionCreator} from "../../redux/reviews-reducer";
import Reviews from "./Reviews";

const ReviewsContainer = (props) => {
    let state = props.store.getState()
    let addReview = () => {
        props.store.dispatch(addReviewActionCreator());
    }

    let onReviewChange = (text) => {
        let action = updateNewReviewTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Reviews updateNewReviewText={onReviewChange} addReview={addReview}
        newReviewText={state.reviewPage.newReviewText} reviews={state.reviewPage.reviews}/>
    )
}

export default ReviewsContainer