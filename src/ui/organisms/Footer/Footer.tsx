import React from "react";
import './Footer.css';
import Link from "next/link";
export const Footer = () => {
    return (
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
                            <li>
                                <Link href={"/#menu"}>Menu</Link>
                            </li>

                            <li> <Link href={"/#feature"}>Polecane</Link></li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <p>Social Media</p>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>© 2024 - Szameczka.pl - <a href={'https://kamil-filip.pl/'}>Kamil Filip</a></p>
            </div>
        </footer>
    )
}