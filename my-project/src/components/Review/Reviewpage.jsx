import React from 'react';
import ReviewsContainer from "./ReviewsContainer";

const Reviewpage = (props) => {
    return (
            <div>
                <ReviewsContainer store={props.store}
                />
            </div>
    )
}

export default Reviewpage