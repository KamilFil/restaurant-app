import React, {useContext, useState} from "react";
import {type Product} from "@/ui/templates/HomePage/HomePage";
import {ModelProductContext} from "@/providers/ModalProvider";
import {Pagination} from "@/ui/molecules/Pagination/Pagination";
import './CardMenu.css';

interface Props {
    items: Product[];
}

export const CardMenu = (props: Props) => {

    const modalProductContext = useContext(ModelProductContext);


    const pageElementQuantity = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(Math.ceil(props.items.length / pageElementQuantity));

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    if(props.items.length === 0) {
        return null;
    }

    const data = props.items.slice((pageElementQuantity * currentPage) - pageElementQuantity, currentPage * pageElementQuantity);


    return (
        <section id={'menu'} className='menu-card'>
            <div className='menu-card-title'>
                <div className=''></div>
                <h2>Nasze menu</h2>
                <p>Sprawdź nasze dania</p>
            </div>
            <div className='menu-card-list'>
                {data.map((item, index) => (
                    <a key={index} className='menu-card-item' href='/'
                       onClick={(e) => (modalProductContext?.handleProductSelect(e, item))}>
                        <div className="menu-card-item-img">
                            <img src={`/img/product/${item.img}`} alt="Menu item"/>
                        </div>
                        <div className='menu-card-item-text'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p className='menu-card-item-price'>{item.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange}/>
        </section>
    )

}