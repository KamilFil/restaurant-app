import React, {createContext, useEffect, useState} from "react";
import Cookie from "js-cookie";


export interface CartItem {
    id: string;
    title: string;
    price: string;
}

export interface CartContext {
    cart: CartItem[] | [];
    modalCartOpenHandler: (open:boolean) => () => void
    modalCartOpen: boolean;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const CartProvider = ({children}: Props) => {

    const [cart, setCart] = useState<CartItem[] | []>([]);
    const [modalCartOpen, setModalCartOpen] = useState<boolean>(false);

    useEffect(() => {
        const getCookies:string | undefined = Cookie.get('cart');
        if(!getCookies){
            Cookie.set('cart', JSON.stringify([]), { expires: 1, path: '/', httpOnly: false})
        }
        const dataCart = JSON.parse(getCookies || '[]') as CartItem[];
        setCart(dataCart);
    }, [modalCartOpen]);

    const modalCartOpenHandler = (open:boolean) => () => {
        setModalCartOpen(open);
    }

    return (
        <CartContext.Provider value={{cart, modalCartOpen, modalCartOpenHandler}}>
            {children}
        </CartContext.Provider>
    )

}