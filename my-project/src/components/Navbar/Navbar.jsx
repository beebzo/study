import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.main_menu}>
                <NavLink to='/Mainpage' activeClassName={classes.active}>Главная</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to='/Dialogs' activeClassName={classes.active}>Диалоги</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to='/Reviewpage' activeClassName={classes.active}>Отзывы</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to='/profile' activeClassName={classes.active}>Профиль</NavLink></div>
            {/*<div className={classes.main_menu} activeClassName={classes.active}>
                <NavLink to="" activeClassName={classes.active}>Акции</NavLink></div>
            <div className={classes.main_menu} activeClassName={classes.active}>
                <NavLink to="" activeClassName={classes.active}>Каталог</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="" activeClassName={classes.active}>Доставка и оплата</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="" activeClassName={classes.active}>Контакты</NavLink></div>
            <div className={classes.main_menu}
            ><NavLink to="" activeClassName={classes.active}>Магазины</NavLink></div>
            <div className={classes.main_menu}>
                <NavLink to="" activeClassName={classes.active}>Корзина</NavLink></div>*/}

        </nav>
    )
}

export default Navbar;