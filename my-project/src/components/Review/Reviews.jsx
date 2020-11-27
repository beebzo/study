import classes from "./Components/Reviewpage.module.css";
import React from "react";
import Review from "./Review";

const Reviews = (props) => {
    let reviewElements =
        props.reviews.map (r => <Review picname={r.picname}
                                        authorName={r.authorName}
                                        reviewtext={r.reviewtext}
                                        key={r.id}/> );

    let newReviewElement = React.createRef()
    let onAddReview = () => {
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
                <div><textarea placeholder='Ваш обзор' onChange={onReviewChange}
                               ref={newReviewElement} value={props.newReviewText}
                               name="" id="" cols="30" rows="10"></textarea></div>
                <div><button onClick={onAddReview}>Написать обзор</button></div>
            </div>

            <div>{reviewElements}</div>

        </div>
    )
}

export default Reviews