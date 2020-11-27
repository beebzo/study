import React from "react";
import {addReviewActionCreator, updateNewReviewTextActionCreator} from "../../redux/reviews-reducer";
import Reviews from "./Reviews";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        reviews: state.reviewPage.reviews,
        newReviewText: state.reviewPage.newReviewText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewReviewText: (text) => {
            let action = updateNewReviewTextActionCreator(text)
            dispatch(action)
        },
        addReview: () => {
            dispatch(addReviewActionCreator())
        }
    }
}
const ReviewsContainer = connect (mapStateToProps, mapDispatchToProps)(Reviews)


export default ReviewsContainer