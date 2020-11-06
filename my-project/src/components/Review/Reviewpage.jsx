import React from 'react';
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