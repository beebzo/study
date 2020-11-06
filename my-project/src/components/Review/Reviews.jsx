import classes from "./Components/Reviewpage.module.css";
import React from "react";
import Review from "./Review";



const Reviews = (props) => {
    let reviewElements =
        props.reviews.map (r => <Review picname={r.picname}
                                        authorName={r.authorName}
                                        reviewtext={r.reviewtext} /> );

    let newReviewElement = React.createRef()
    let AddReview = () => {
        props.dispatch({type: 'ADD-REVIEW'});
    }

    let onReviewChange = () => {
        let text = newReviewElement.current.value;
        let action = {type: 'UPDATE-NEW-REVIEW-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div>
            <div className={classes.header}>
                Отзывы
            </div>
            <div className={classes.NReview}>
                <div><textarea onChange={onReviewChange} ref={newReviewElement} value={props.newReviewText} name="" id="" cols="30" rows="10"></textarea></div>
                <div><button onClick={AddReview}>Написать обзор</button></div>
            </div>

            <div>{reviewElements}</div>

        </div>
    )
}

export default Reviews