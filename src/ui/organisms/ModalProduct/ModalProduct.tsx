import {useContext} from "react";

import {AddToCartButton} from "@/ui/atoms/AddToCart/AddToCart";
import './ModaProduct.css'
import {ModelProductContext} from "@/providers/ModalProvider";


export const ModalProduct = () => {
    const modalProductContext = useContext(ModelProductContext);
    {document.body.style.overflow =  modalProductContext?.modalProductOpen ? 'hidden' : 'auto';}
    if(!modalProductContext?.selectProduct) {
        return null;
    }
    const {id, img, title, price, description} = modalProductContext.selectProduct

    const handleModalClose = () => {
        modalProductContext.closeModalProduct();
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <div className='modal-product'>
                <div className='modal-product-overlay'>
                </div>
                <div className='modal-product-list'>
                    <div className="modal-product-close">
                        <i onClick={handleModalClose} className="modal-close fa-solid fa-xmark"></i>
                    </div>
                    <div className='modal-product-list-item'>
                        <div className='modal-product-list-item-img'>
                            <img src={`/img/product/${img}`} alt="Menu item"/>
                        </div>
                        <div className='modal-product-list-item-description'>
                            <h1>{title}</h1>
                            <p>{price}</p>
                            <p>{description}</p>
                            <AddToCartButton items={{id: String(id), title: title, price: price}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}