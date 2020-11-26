import React from "react";
import {addReviewActionCreator, updateNewReviewTextActionCreator} from "../../redux/reviews-reducer";
import Reviews from "./Reviews";
import StoreContext from "../../StoreContext";

const ReviewsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addReview = () => {
                    store.dispatch(addReviewActionCreator());
                }
                let onReviewChange = (text) => {
                    let action = updateNewReviewTextActionCreator(text);
                    store.dispatch(action);
                }
                return <Reviews updateNewReviewText={onReviewChange}
                                addReview={addReview}
                                newReviewText={state.reviewPage.newReviewText}
                                reviews={state.reviewPage.reviews}/>
            }
            }
            </StoreContext.Consumer>
)
}

export default ReviewsContainer