import React from 'react';
import classes from './Components/Reviewpage.module.css'
import userpic from './Components/userpic.png'
import userpic2 from './Components/userpic2.png'
import userpic3 from './Components/userpic3.png'
import userpic4 from './Components/userpic4.png'

let picnames = [
    {picname: 'userpic'},
    {picname: 'userpic2'},
    {picname: 'userpic3'},
    {picname: 'userpic4'}
]

let authorNames = [
    {authorName: 'Алексей Иванов, г. Барнаул'},
    {authorName: 'Валентина Петрова, г. Смоленск'},
    {authorName: 'Петр Кузнецов, г. Волгоград'},
    {authorName: 'Виктор Степанов, г. Владивосток'}
]

let reviewtexts = [
    {reviewtext: 'У магазина очень быстрая доставка, с помощью СДЭК товар оказа' +
            'лся у меня на пороге через три дня после заказа.'},
    {reviewtext: 'Честно говоря, меня удивляет, как владельцы магазина' +
            ' могут держать цены настолько низкими! В моем' +
            'городе тот же Iphone стоит в полтора раза дороже.'},
    {reviewtext: 'Мне понравилась отзывчивость и скорость продавцов, ' +
            'федеральным сетям стоит поучиться.'},
    {reviewtext: 'Хоть и живу рядом с Китаем, нахожу в ассортименте те ' +
            'вещи, которых нет ни у нас на азиатских рынках' +
            'ни на Aliexpress.'}
]

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
            {props.authorName}
            {props.reviewtext}  </div>

        </div>
    )
}
export default Review
export {picnames, authorNames, reviewtexts, Profilepic}