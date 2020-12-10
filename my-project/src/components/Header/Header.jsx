import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.freelogodesign.org/file/app/client/thumb/30a9682f-52dd-4930-bad4-fcbb7bb918ee_200x200.png?1601471847039" alt=""/>
            <h3>Наши контакты:</h3>
            <h3>+7 (843) 123 45 67</h3>
            <h3>+8 (800) 234 56 78</h3>
            <div className={classes.choose_city}>
                <select>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Казань</option>
                    <option>Екатеринбург</option>
                    <option>Новосибирск</option>
                    <option>Хабаровск</option>
                </select>
            </div>
        </header>
    )
}

export default Header;