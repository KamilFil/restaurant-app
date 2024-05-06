import {type Metadata} from "next";
import './HomePage.css'
export const metadata: Metadata = {
    title: "Restaurant APP - Szamka.pl",
    description: "",
}

const items = [
    {title: 'Pierogi ', description: 'Nadziewane kieszonki ciasta, najczęściej z serem, mięsem, kapustą lub owocami. Popularne na święta i codzienne obiady.', price: '25zł', img:'szameczka-pierogi.png'},
    {title: 'Bigos', description: 'Gęsta, aromatyczna potrawa z kapusty kiszonej, mięsa oraz różnych dodatków jak grzyby i cebula, znana jako "polska kapusta".', price: '15zł', img:'szameczka-bigos.png'},
    {title: 'Kotlet schabowy', description: 'Panierowany i smażony kotlet ze schabu, podobny do wiedeńskiego schnitzela, podawany z ziemniakami i kapustą.".', price: '35zł', img:'szameczka-schabowy.png'},
    {title: 'Gołąbki', description: 'Liście kapusty faszerowane mieszanką mięsa mielonego i ryżu lub kaszy, zapiekane w sosie pomidorowym lub grzybowym.".', price: '32zł', img:'szameczka-golabki.png'},
    {title: 'Barszcz czerwony', description: 'Czysty, intensywnie czerwony barszcz na bazie buraków, podawany z krokietem lub uszkami z mięsem lub kapustą.', price: '18zł', img:'szameczka-barszcz.png'},
    {title: 'Rosół', description: 'Bulion drobiowy z makaronem, marchewką, pietruszką i selerem, podstawowa zupa na polskim stole niedzielnym.', price: '15zł', img:'szameczka-rosol.png'},
    {title: 'Kluski śląskie', description: 'Miękkie, okrągłe kluski z dziurką na środku, wykonane z ciasta ziemniaczanego, idealne jako dodatek do sosów i gulaszy.', price: '22zł', img:'szameczka-kluski.png'},
    {title: 'Kebab', description: 'Popularna w Polsce potrawa z pieczonego mięsa, serwowana w bułce lub placku z dodatkiem sałatki, cebuli i sosów. Doskonała jako szybkie danie na wynos.', price: '28zł', img:'szameczka-kebab.png'},
    {title: 'Dorsz po polsku', description: 'Klasyczne danie z dorsza smażonego lub pieczonego, podawanego z dodatkiem ziemniaków i świeżych warzyw. Ryba często jest przyprawiana cytryną i koperkiem, co podkreśla jej delikatny smak.', price: '42zł', img:'szameczka-dorsz.png'},
]

const featureItems = [
    {title: 'Kotlet schabowy', description: 'Panierowany i smażony kotlet ze schabu, podobny do wiedeńskiego schnitzela, podawany z ziemniakami i kapustą.".', price: '35zł', img:'szameczka-schab-polecany.jpg'},
    {title: 'Kebab', description: 'Popularna w Polsce potrawa z pieczonego mięsa, serwowana w bułce lub placku z dodatkiem sałatki, cebuli i sosów. Doskonała jako szybkie danie na wynos.', price: '28zł', img:'szameczka-kebab-polecany.jpg'},
    {title: 'Dorsz po polsku', description: 'Klasyczne danie z dorsza smażonego lub pieczonego, podawanego z dodatkiem ziemniaków i świeżych warzyw. Ryba często jest przyprawiana cytryną i koperkiem, co podkreśla jej delikatny smak.', price: '42zł', img:'szameczka-dorsz-polecany.jpg'},
]


export const HomePage = () => {
    return (
        <>
            <nav className='nav'>
                <div className='container'>
                    <div className='nav-logo'>
                        <img src="/img/szameczka-logo.svg" alt="Szameczka.pl"/>
                    </div>
                    <ul className='nav-link-list'>
                        <li>Menu</li>
                        <li>Polecane</li>
                        <li>Kontakt</li>
                    </ul>
                    <div className='nav-search'>
                        <input placeholder='Wyszukaj jedzenie'></input>
                    </div>
                </div>
            </nav>
            <header className='header'>
            <div className='container'>
                <div className='header-slider'>
                    <img src="/img/szamka.jpg" alt="Restaurant"/>
                </div>
            </div>
            </header>
            <main>
                <div className='container'>
                    <section className='menu-card'>
                        <div className='menu-card-title'>
                            <div className=''></div>
                            <h2>Nasze menu</h2>
                            <p>Sprawdź nasze dania</p>
                        </div>
                        <div className='menu-card-list'>
                            {items.map((item, index) => (
                                <a key={index} className='menu-card-item' href='/'>
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
                        <div className='pagination'>
                            <button>{'<'}</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>{'>'}</button>
                        </div>
                    </section>
                    <section className='feature-card'>
                        <div className='feature-card-title'>
                            <div className=''></div>
                            <h2>Polecane dania</h2>
                            <p>Godne Twojego smaku</p>
                        </div>
                        <div className='feature-card-list'>
                            {featureItems.map((item, index) =>
                                (
                                    <a key={index} className='feature-card-item' href='/'>
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
                </div>
            </main>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer-list'>
                        <div className='footer-brand'>
                            <img src="/img/szameczka-footer.svg" alt="Szamka.pl"/>
                            <p>Witajcie w naszej kuchni pełnej wspaniałego smaku i zapachu. Życzymy smacznego!</p>
                        </div>
                        <div className='footer-item'>
                            <p>Nawigacja</p>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                        <div className='footer-item'>
                        <p>Social Media</p>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copy'>
                    <p>© 2024 - Szameczka.pl</p>
                </div>
            </footer>
        </>
    )
}