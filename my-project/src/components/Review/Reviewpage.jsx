import React from 'react';
import classes from './Components/Reviewpage.module.css'
import Review from "./Review";
import userpic from './Components/userpic.png'
import userpic2 from './Components/userpic2.png'
import userpic3 from './Components/userpic3.png'
import userpic4 from './Components/userpic4.png'
import like from './Components/like.png'
import dislike from './Components/dislike.png'
import likecount from "./Components/Like";




const Reviewpage = () => {
    return (
        <div>
            <div className={classes.header}>
                Отзывы
            </div>
                <div className={classes.NReview}><textarea name="" id="" cols="30" rows="10"></textarea><button>Написать обзор</button>
                </div>
            <div className={classes.review}>
                <Review profilepic='<img src={userpic} align="left" </img>' />
            <Review authorName='Алексей Иванов, г. Барнаул' />
            <Review message='У магазина очень быстрая доставка, с помощью СДЭК товар оказался у меня на пороге через три дня после
                    заказа.' />
                <span className={classes.LikeDislike}><img src={like} alt=""/> {likecount}
                    <img src={dislike} alt=""/></span>
            </div>
            <div className={classes.review}>
                <Review profilepic='{userpic2} align="left"></img>' />
                <Review authorName='Валентина Петрова, г. Смоленск' />
                <Review message='Честно говоря, меня удивляет, как владельцы магазина могут держать цены настолько низкими! В моем
                    городе тот же Iphone стоит в полтора раза дороже.' />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Review profilepic='img src={userpic3} align="left"></img>' />
                <Review authorName='Петр Кузнецов, г. Волгоград' />
                <Review message='Мне понравилась отзывчивость и скорость продавцов, федеральным сетям стоит поучиться.' />
                <div className={classes.LikeDislike}><img src={like} alt=""/>
                    <img src={dislike} alt=""/>
                </div>
            </div>
            <div className={classes.review}>
                <Review profilepic='<img src={userpic4} align="left"></img>' />
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