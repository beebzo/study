import React from 'react';
import classes from './Components/Reviewpage.module.css'
import userpic from './Components/userpic.png'
import userpic2 from './Components/userpic2.png'
import userpic3 from './Components/userpic3.png'
import userpic4 from './Components/userpic4.png'
import like from './Components/like.png'
import dislike from './Components/dislike.png'

let Profilepic = (props)  => {
    return (
        <div>
          <div className={classes.profilepic}>
            <img src={require('./Components/' + (props.picname) + '.png')} />
          </div>
        </div>
    )
        }

const Review = (props) => {
    return (
        <div>
        <div className={classes.review}>
            {props.profilepic}
            {props.authorName}
            {props.message}  </div>

        </div>
    )
}
export default Review
export {Profilepic}