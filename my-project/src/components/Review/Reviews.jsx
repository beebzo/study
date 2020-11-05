import classes from "./Components/Reviewpage.module.css";
import like from "./Components/like.png";
import dislike from "./Components/dislike.png";
import React from "react";
import Review from "./Review";



const Reviews = (props) => {
    let reviewElements =
        props.reviews.map (r => <Review picname={r.picname}
                                        authorName={r.authorName}
                                        reviewtext={r.reviewtext} /> );

    let newReviewElement = React.createRef()
    let AddReview = () => {
        props.addReview();
    }

    let onReviewChange = () => {
        let text = newReviewElement.current.value;
        props.updateNewReviewText(text);
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