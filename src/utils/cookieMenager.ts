import Cookie from 'js-cookie';

export interface CartItem {
    id: string;
    title: string;
    price: string;
}


export const addToCart = (item: CartItem): boolean | undefined => {
    try {
        const cartData = Cookie.get('cart');
        const currentCart: CartItem[] = cartData ? (Array.isArray(JSON.parse(cartData)) ? JSON.parse(cartData) as CartItem[] : []) : [];
        const updatedCart: CartItem[] = [...currentCart, item];
        Cookie.set('cart', JSON.stringify(updatedCart), { expires: 1, path: '/', httpOnly: false})
        return true
    } catch (error) {
        console.error('Failed to add item to cart:', error);
        return false;
    }
}