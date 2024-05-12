"use client"
import React, {useContext} from "react";
import {addToCart, type CartItem} from "@/utils/cookieMenager";
import {ModelProductContext} from "@/providers/ModalProvider";
import './AddToCart.css';

interface Props {
    items: CartItem;
}

export const AddToCartButton: React.FC<Props> = (props:Props) => {

    const modalProductContext = useContext(ModelProductContext);

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const success = addToCart(props.items);
        if (success) {
            alert('Dodano do koszyka');
        } else {
            alert('Błąd podczas dodawania do koszyka');
        }
        modalProductContext?.closeModalProduct();
    };

    return (
        <button onClick={handleAddToCart} className='add-to-cart-button'>
            Dodaj do koszyka
        </button>
    );
};