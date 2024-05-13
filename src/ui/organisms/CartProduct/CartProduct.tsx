import React, {useContext, useState} from "react";
import './CartProduct.css'
import {CartContext} from "@/providers/CartProvider";
import Cookies from "js-cookie";

export const CartProduct = () => {
    const [orderRes, setOrderRes] = useState<string | null>(null)

    const cartContext = useContext(CartContext);

    {document.body.style.overflow = cartContext ? 'hidden' : "auto";}

    const cartHandler = (open:boolean) => () => {
        cartContext?.modalCartOpenHandler(open)();
        document.body.style.overflow = 'auto';
    }

    if(!cartContext?.modalCartOpen) {
        return null;
    }

    const orderHandler = () => {
        Cookies.remove('cart')
        setOrderRes('Twoje zamówienie zostało złożone. Dziękujemy!')
        setTimeout(() => {
            cartHandler(false)();
        }, 3000)

    }

    const {cart} = cartContext;

    return (
        <div className='modal-cart'>
            <div className='modal-blur'></div>
            <div className="modal-cart-content">
                <i onClick={cartHandler(false)} className="modal-close fa-solid fa-xmark"></i>
                <h2>Twój koszyk</h2>
                <table className='modal-cart-list'>
                    <thead className='modal-cart-list-head'>
                    <tr>
                        <th>Produkt</th>
                        <th>Cena</th>
                    </tr>
                    </thead>
                    <tbody className='modal-cart-list-body'>
                    {cart.map((item, index) => (
                        <tr className='modal-cart-list-item' key={index}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <button className='modal-cart-btn' onClick={orderHandler}>Przejdź do płatności</button>
                {orderRes && <p>{orderRes}</p>}
            </div>
        </div>
    )
}