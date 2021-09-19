import React from 'react'
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png' />

        <div className={s.loginBlock}>
            { props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>log out</button></div> 
            :<NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;