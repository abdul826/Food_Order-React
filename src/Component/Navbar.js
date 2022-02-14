import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    const [show, setstate] = useState(false)

    const click = () => {
        setstate(!show)
    }
    return (
        <div className='navbar'>
            <div className="left" id={show ? 'open' : 'close'}>
                <img src={logo} alt="" />
                <div className="hiddenLinks">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/menu"> Menu </NavLink>
                    <NavLink to="/about"> About </NavLink>
                    <NavLink to="/contact"> Contact </NavLink>
                </div>
            </div>
            <div className="right">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about'>About </NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <button type="submit" className='button' onClick={click}><i className="ri-align-left"></i></button>
            </div>
        </div>
    )
}

export default Navbar

// 12150