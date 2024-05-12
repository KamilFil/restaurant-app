import React, {useContext} from "react";
import Link from "next/link";
import {CartContext} from "@/providers/CartProvider";
import './Nav.css'


export const Nav = () => {
    const cartContext = useContext(CartContext);
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
                        <i onClick={cartContext?.modalCartOpenHandler(true)} className="fa-solid fa-cart-shopping">
                        </i>
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