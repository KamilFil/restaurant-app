import React, {createContext, useState} from "react";
import {type Product} from "@/ui/templates/HomePage/HomePage";

interface Props {
    children: React.ReactNode;
}

interface ModalProductContext {
    openModalProduct: (open: boolean) => () => void;
    closeModalProduct: () => void;
    handleProductSelect: (e: React.MouseEvent<HTMLAnchorElement>, product: Product) => void;
    selectProduct: Product | null;
    modalProductOpen: boolean;
}

export const ModelProductContext = createContext<ModalProductContext | undefined>(undefined);

export const ModalProductProvider = (props:Props) => {
    const [modalProductOpen, setModalProductOpen] = useState(false);
    const [selectProduct, setSelectProduct] = useState<Product | null>(null);


    const openModalProduct = (open:boolean) => () => {
        setModalProductOpen(open);
    }
    
    const closeModalProduct = () => {
        setModalProductOpen(false);
        setSelectProduct(null);
    }
    
    const handleProductSelect = (e: React.MouseEvent<HTMLAnchorElement>, product:Product) => {
        setSelectProduct(product);
        setModalProductOpen(true);
        e.preventDefault();
    }

    return (
        <ModelProductContext.Provider value={{openModalProduct, closeModalProduct, handleProductSelect, selectProduct, modalProductOpen}}>
            {props.children}
        </ModelProductContext.Provider>
    )

}