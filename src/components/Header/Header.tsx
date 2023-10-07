import React from 'react';
import headerClassNames from './headerClassNames';
import Link from 'next/link';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {FaGoogle} from 'react-icons/fa';

const Header = () => {

    const {
        header,
        container,
        logoContainer,
        logo,
        nav,
        link,
        cart,
        orders,
        contactUs,
        signUpBtn,
        signInBtn,
        logoutBtn,
        ul
    }=headerClassNames;
    return (
        <header className={header}>
<div className={container}>
<Link href='/' className={logo}> Logo</Link>
<nav className={nav}>
<ul className={ul}>
<li>
    <button className={link}>
        <span>Cart</span>
        <AiOutlineShoppingCart className="inline-block text-3xl "/>
        <div className={cart}>10</div>
    </button>
</li>
<li className='flex items-center justify-center h-7'>
    <Link href="/orders" className={orders}>Orders</Link>
    <button className={logoutBtn}>Logout</button>
    <button className={signUpBtn}>Sing UP</button>
    <button className={signInBtn}>Sign In
    <FaGoogle
    style={{
        FontSize:"25px",
        cursor:"pointer",
        marginLeft:"12px"
    }}
    className={link}/></button>
    
    

</li>
</ul>
</nav>
</div>
        </header>
    );
};

export default Header;