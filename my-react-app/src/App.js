import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductsList from './components/products/ProductsList';
import ContactForm from './components/ContactForm';
import IconsContact from './components/IconsContact';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('he');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Selected language: ${language}`);
  };

  return (
    <div className="App">
      <Navbar selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
      <HomePage selectedLanguage={selectedLanguage} />
      <ProductsList selectedLanguage={selectedLanguage} />
      {/* <ContactForm selectedLanguage={selectedLanguage} /> */}
      <IconsContact selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;
