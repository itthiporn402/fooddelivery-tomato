import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js'; 
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState("menu");

  return (
    <div className='navbar'>
         <a href='/'><img src={assets.logo} alt="Logo" className="logo" /></a>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search Icon" />
            <div className="navbar-search-icon"> 
                <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar;
