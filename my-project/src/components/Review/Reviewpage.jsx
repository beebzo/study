import React from 'react';
import classes from './Components/Reviewpage.module.css'
import Review, {Profilepic} from "./Review";
import userpic from './Components/userpic.png'
import userpic2 from './Components/userpic2.png'
import userpic3 from './Components/userpic3.png'
import userpic4 from './Components/userpic4.png'
import like from './Components/like.png'
import dislike from './Components/dislike.png'
import likecount from "./Components/Like";

let newReviewElement = React.createRef()
let addReview = () => {
    let text=newReviewElement.current.value;
    alert(text+'\n'+'Спасибо за отзыв')
}

const Reviewpage = () => {
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
                <Profilepic picname='userpic' />
                <Review authorName='Алексей Иванов, г. Барнаул' />
                <Review message='У магазина очень быстрая доставка, с помощью СДЭК товар оказался у меня на пороге через три дня после
                    заказа.' />
                <span className={classes.LikeDislike}><img src={like} alt=""/> {likecount}
                    <img src={dislike} alt=""/></span>
            </div>
            <div className={classes.review}>
                <Profilepic picname='userpic2' />
                <Review authorName='Валентина Петрова, г. Смоленск' />
                <Review message='Честно говоря, меня удивляет, как владельцы магазина могут держать цены настолько низкими! В моем
                    городе тот же Iphone стоит в полтора раза дороже.' />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Profilepic picname='userpic3' />
                <Review authorName='Петр Кузнецов, г. Волгоград' />
                <Review message='Мне понравилась отзывчивость и скорость продавцов, федеральным сетям стоит поучиться.' />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Profilepic picname='userpic4' />
                <Review authorName='Виктор Степанов, г. Владивосток' />
                <Review message='Хоть и живу рядом с Китаем, нахожу в ассортименте те вещи, которых нет ни у нас на азиатских рынках,
                    ни на Aliexpress.' />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Reviewpage