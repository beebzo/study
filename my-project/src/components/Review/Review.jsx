import classes from "./Components/Reviewpage.module.css";
import React from "react";
import like from "./Components/like.png";
import dislike from "./Components/dislike.png";

const Review = (props) => {
    return (
        <div><img src={props.picname}/>
            <div className={classes.authorName}><span className={classes.LikeDislike}>
                <img src={like}/>
                <img src={dislike} alt=""/>
            </span><b>{props.authorName}</b></div>
            <div className={classes.reviewtext}>{props.reviewtext}</div>

        </div>
    )
}

export default Review