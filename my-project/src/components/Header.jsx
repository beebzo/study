import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
        <img src="https://www.freelogodesign.org/file/app/client/thumb/30a9682f-52dd-4930-bad4-fcbb7bb918ee_200x200.png?1601471847039" alt=""/>
        <h3>Наши контакты:</h3>
<h3>+7 (843) 123 45 67</h3>
<h3>+8 (800) 234 56 78</h3>
<div className="choose_city">
<ul>
<li><a href="">Москва</a></li>
<li><a href="">Санкт-Петербург</a></li>
<li><a href="">Казань</a></li>
<li><a href="">Екатеринбург</a></li>
<li><a href="">Новосибирск</a></li>
</ul>
</div>
</header>
    )
}

export default Header;