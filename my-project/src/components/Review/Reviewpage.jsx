import React from 'react';
import classes from './Components/Reviewpage.module.css'
import Review, { picnames, reviewtexts, Profilepic} from "./Review";
import like from './Components/like.png'
import dislike from './Components/dislike.png'
import likecount from "./Components/Like";



let newReviewElement = React.createRef()
let addReview = () => {
    let text=newReviewElement.current.value;
    alert(text+'\n'+'Спасибо за отзыв')
}

/*let reviewUserpicELements = picnames.map (u => <Profilepic picname={u.picname} /> );*/

const Reviewpage = (props) => {
    return (
        <div>
            <div className={classes.header}>
                Отзывы
            </div>
                <div className={classes.NReview}>
                    <div><textarea ref={newReviewElement} name="" id="" cols="30" rows="10"></textarea></div>
                    <div><button onClick={addReview}>Написать обзор</button></div>
                </div>
            <div className={classes.review}>
                <Profilepic picname={picnames[0].picname} />
                <Review authorName={props.authorNames[0].authorName} />
                <Review reviewtext={reviewtexts[0].reviewtext} />
                <span className={classes.LikeDislike}><img src={like} alt=""/> {likecount}
                    <img src={dislike} alt=""/></span>
            </div>
            <div className={classes.review}>
                <Profilepic picname={picnames[1].picname} />
                <Review authorName={props.authorNames[1].authorName} />
                <Review reviewtext={reviewtexts[1].reviewtext} />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Profilepic picname={picnames[2].picname} />
                <Review authorName={props.authorNames[2].authorName} />
                <Review reviewtext={reviewtexts[2].reviewtext} />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Profilepic picname={picnames[3].picname} />
                <Review authorName={props.authorNames[2].authorName} />
                <Review reviewtext={reviewtexts[2].reviewtext} />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Reviewpage