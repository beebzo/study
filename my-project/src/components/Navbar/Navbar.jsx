import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.main_menu}>
                <NavLink to='Mainpage'>Главная</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="">Акции</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="">Каталог</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="">Доставка и оплата</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="">Контакты</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to='/Reviewpage'>Отзывы</NavLink></div>
            <div className={classes.main_menu}
            ><NavLink to="">Магазины</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="">Корзина</NavLink></div>

        </nav>
    )
}

export default Navbar;