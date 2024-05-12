import React, {useContext} from "react";
import {ModelProductContext} from "@/providers/ModalProvider";
import {Product} from "@/ui/templates/HomePage/HomePage";
import './CardFeature.css';

interface Props {
    items: Product[];
}

export const CardFeature = (props: Props) => {
    const modalProductContext = useContext(ModelProductContext);

    return (
        <section id={"feature"} className='feature-card'>
            <div className='feature-card-title'>
                <div className=''></div>
                <h2>Polecane dania</h2>
                <p>Godne Twojego smaku</p>
            </div>
            <div className='feature-card-list'>
                {props.items.map((item, index) =>
                    (
                        <a key={index} className='feature-card-item' href='/'
                           onClick={(e) => (modalProductContext?.handleProductSelect(e, item))}>
                            <div className="feature-card-item-img">
                                <img src={`/img/product/${item.img}`} alt="Menu item"/>
                            </div>
                            <div className='feature-card-item-text'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p className='feature-card-item-price'>{item.price}</p>
                            </div>
                        </a>
                    ))}
            </div>
        </section>
    )
}