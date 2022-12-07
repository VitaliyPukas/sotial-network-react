import React from "react";
import mod from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? mod.activeLink : '';



const Navbar = () => {
    return (
        <nav className={mod.nav}>
            <div><NavLink to="/profile" className={activeLink}>My profile</NavLink></div>
            <div><NavLink to="/dialogs" className={activeLink}>Messages</NavLink></div>
            <div><NavLink to="/news" className={activeLink}>News</NavLink></div>
            <div><NavLink to="/media" className={activeLink}>Media</NavLink></div>
            <div><NavLink to="/settings" className={activeLink}>Settings</NavLink></div>
        </nav>
    )
}
export default Navbar