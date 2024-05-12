"use client"
import {type Metadata} from "next";
import './HomePage.css'
import React, {useContext} from "react";
import {ModalProduct} from "@/ui/organisms/ModalProduct/ModalProduct";
import {ModelProductContext} from "@/providers/ModalProvider";
import {CartProduct} from "@/ui/organisms/CartProduct/CartProduct";
import {CartContext} from "@/providers/CartProvider";
import {Nav} from "@/ui/organisms/Nav/Nav";
import {Header} from "@/ui/organisms/Header/Header";
import {CardMenu} from "@/ui/organisms/CardMenu/CardMenu";
import {Footer} from "@/ui/organisms/Footer/Footer";
import {CardFeature} from "@/ui/organisms/CardFeature/CardFeature";

export const metadata: Metadata = {
    title: "Restaurant APP - Szameczka.pl",
    description: "",
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    img: string;
}


const items = [
    {id: 0,title: 'Pierogi ', description: 'Nadziewane kieszonki ciasta, najczęściej z serem, mięsem, kapustą lub owocami. Popularne na święta i codzienne obiady.', price: '25zł', img:'szameczka-pierogi.png'},
    {id: 1,title: 'Bigos', description: 'Gęsta, aromatyczna potrawa z kapusty kiszonej, mięsa oraz różnych dodatków jak grzyby i cebula, znana jako "polska kapusta".', price: '15zł', img:'szameczka-bigos.png'},
    {id: 2,title: 'Kotlet schabowy', description: 'Panierowany i smażony kotlet ze schabu, podobny do wiedeńskiego schnitzela, podawany z ziemniakami i kapustą.".', price: '35zł', img:'szameczka-schabowy.png'},
    {id: 3,title: 'Gołąbki', description: 'Liście kapusty faszerowane mieszanką mięsa mielonego i ryżu lub kaszy, zapiekane w sosie pomidorowym lub grzybowym.".', price: '32zł', img:'szameczka-golabki.png'},
    {id: 4,title: 'Barszcz czerwony', description: 'Czysty, intensywnie czerwony barszcz na bazie buraków, podawany z krokietem lub uszkami z mięsem lub kapustą.', price: '18zł', img:'szameczka-barszcz.png'},
    {id: 5,title: 'Rosół', description: 'Bulion drobiowy z makaronem, marchewką, pietruszką i selerem, podstawowa zupa na polskim stole niedzielnym.', price: '15zł', img:'szameczka-rosol.png'},
    {id: 6,title: 'Kluski śląskie', description: 'Miękkie, okrągłe kluski z dziurką na środku, wykonane z ciasta ziemniaczanego, idealne jako dodatek do sosów i gulaszy.', price: '22zł', img:'szameczka-kluski.png'},
    {id: 7,title: 'Kebab', description: 'Popularna w Polsce potrawa z pieczonego mięsa, serwowana w bułce lub placku z dodatkiem sałatki, cebuli i sosów. Doskonała jako szybkie danie na wynos.', price: '28zł', img:'szameczka-kebab.png'},
    {id: 8,title: 'Dorsz po polsku', description: 'Klasyczne danie z dorsza smażonego lub pieczonego, podawanego z dodatkiem ziemniaków i świeżych warzyw. Ryba często jest przyprawiana cytryną i koperkiem, co podkreśla jej delikatny smak.', price: '42zł', img:'szameczka-dorsz.png'},]

const featureItems = [
    {id:2,title: 'Kotlet schabowy', description: 'Panierowany i smażony kotlet ze schabu, podobny do wiedeńskiego schnitzela, podawany z ziemniakami i kapustą.".', price: '35zł', img:'szameczka-schab-polecany.jpg'},
    {id: 7,title: 'Kebab', description: 'Popularna w Polsce potrawa z pieczonego mięsa, serwowana w bułce lub placku z dodatkiem sałatki, cebuli i sosów. Doskonała jako szybkie danie na wynos.', price: '28zł', img:'szameczka-kebab-polecany.jpg'},
    {id: 8,title: 'Dorsz po polsku', description: 'Klasyczne danie z dorsza smażonego lub pieczonego, podawanego z dodatkiem ziemniaków i świeżych warzyw. Ryba często jest przyprawiana cytryną i koperkiem, co podkreśla jej delikatny smak.', price: '42zł', img:'szameczka-dorsz-polecany.jpg'},
]


export const HomePage = () =>   {
    const modalProductContext = useContext(ModelProductContext);
    const cartContext = useContext(CartContext);

    return (
        <>
            {cartContext?.modalCartOpen && <CartProduct/>}
            {modalProductContext?.selectProduct && modalProductContext?.modalProductOpen && <ModalProduct/>}
            <Nav/>
            <Header/>
            <main>
                <div className='container'>
                   <CardMenu items={items}/>
                    <CardFeature items={featureItems}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}