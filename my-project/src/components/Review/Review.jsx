import React from 'react';
import classes from './Components/Reviewpage.module.css'

const Review = (props) => {
    return (
        <div>
        <div className={classes.review}>
            <img src={props.picname} />
            {props.authorName}
            {props.reviewtext}  </div>

        </div>
    )
}
export default Review