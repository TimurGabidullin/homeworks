import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {

    const [active, setActive] = useState(false)
    let onEnterMouse = () => {
        setActive(true)
    }

    let onLeaveMouse = () => {
        setActive(false)
    }

    return (

        <div className={active ? `${s.nav} ${s.active}` : s.nav} onMouseLeave={onLeaveMouse}>
            <div className={s.btn} onMouseEnter={onEnterMouse}></div>
            <ul className={s.menu}>
                <li><NavLink to='/pre-junior' activeClassName={s.linkActive}>pre-junior</NavLink></li>
                <li><NavLink to='/junior' activeClassName={s.linkActive}>junior</NavLink></li>
                <li><NavLink to='/junior+' activeClassName={s.linkActive}>junior+</NavLink></li>
            </ul>
        </div>

    )
}

export default Header
