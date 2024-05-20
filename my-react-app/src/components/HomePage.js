import React from 'react';
import '../style/HomePage.css';
import image from '../assets/mezuza.jpg'
import translations from '../assets/translations.json';

function HomePage({ selectedLanguage }) {

    return (

        <nav className={`homePage ${selectedLanguage === 'he' ? 'rtl' : 'ltr'}`} id='homePage'>
            <h1>{translations[selectedLanguage].the_art_of_STaM}</h1>
            <h4 className="externalFontText">{translations[selectedLanguage].welcome_message}</h4>
            <img src={image} alt="תמונת מזוזה"></img>
        </nav>

    );
}

export default HomePage;
