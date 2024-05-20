import React, { useState } from 'react';
import '../style/Navbar.css';
import { MdLanguage } from 'react-icons/md';
import translations from '../assets/translations.json';


const Navbar = ({ selectedLanguage, handleLanguageChange }) => {

    const handleClickScroll = (nameElement) => {
        return () => {
            const element = document.getElementById(nameElement);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };



    return (
        <nav className="navbar">
            <ul>
                <button>{translations[selectedLanguage].order_now}</button>
                <li><a onClick={handleClickScroll('product-list')}>{translations[selectedLanguage].services}</a></li>
                <li><a onClick={handleClickScroll('contact')}>{translations[selectedLanguage].contact}</a></li>
                <li><a onClick={handleClickScroll('homePage')}>{translations[selectedLanguage].about_us}</a></li>
                <li><a onClick={handleClickScroll('homePage')}>{translations[selectedLanguage].home_page}</a></li>
                <li className="language-icon">
                    <MdLanguage />
                    <ul className="dropdown">
                        <li onClick={() => handleLanguageChange('he')}>עברית</li>
                        <li onClick={() => handleLanguageChange('en')}>English</li>
                        <li onClick={() => handleLanguageChange('ru')}>Русский</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
