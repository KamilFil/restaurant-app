import React, {useContext, useState} from "react";
import Link from "next/link";
import {CartContext} from "@/providers/CartProvider";
import './Nav.css'


export const Nav = () => {
    const cartContext = useContext(CartContext);
    const [mobileActive, setMobileActive] = useState(false)



    const handleMobileMenu = () => {
        document.body.style.overflow = mobileActive ? 'auto' : 'hidden'
        setMobileActive(!mobileActive)
    }


    const handleCart = () => {
        cartContext?.modalCartOpenHandler(true)()
       setMobileActive(false)
    }

    return (

        <nav className='nav'>
            <div className='container'>
                <div className='nav-logo'>
                    <Link href={'/'}>
                        <img src="/img/szameczka-logo.svg" alt="Szameczka.pl"/>
                    </Link>
                </div>
                <div className='nav-link'>
                    <ul className='nav-link-list'>
                        <Link href={'#menu'} className='nav-link-item' >Menu</Link>
                        <Link href={'#feature'} className='nav-link-item' >Polecane</Link>
                    </ul>
                    <div className='nav-cart'>
                        <i onClick={handleCart} className="fa-solid fa-cart-shopping">
                        </i>
                    </div>
                    <div className='nav-hamburger'>
                        <i className="fa-solid fa-hamburger" onClick={handleMobileMenu}></i>
                    </div>
                    <div className={`nav-mobile-link ${mobileActive ? 'active' : ''}`}>
                        <ul className='nav-mobile-list'>
                            <Link onClick={handleMobileMenu} href={'#menu'} className='nav-mobile-item' >Menu</Link>
                            <Link onClick={handleMobileMenu} href={'#feature'} className='nav-mobile-item' >Polecane</Link>
                        </ul>
                    </div>
                </div>
                {/*@TODO Add search bar*/}
                {/*<div className='nav-search'>*/}
                {/*    <input placeholder='Wyszukaj jedzenie'></input>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}