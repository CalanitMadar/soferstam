import React, { useState } from 'react';
import axios from 'axios';
import '../style/ContactForm.css';
import translations from '../assets/translations.json';

const ContactForm = ({ selectedLanguage }) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiUrl}/send-message`, formData);
            setFormData({ name: '', phone: '', email: '', message: '' });
            setStatusMessage(translations[selectedLanguage].submit_good);
        } catch (error) {
            setStatusMessage(translations[selectedLanguage].error_submit);
        }
    };

    return (
        <div id="contact">
            <form onSubmit={handleSubmit} className="contact-form">
                <h1>{translations[selectedLanguage].contact_us}</h1>
                <input
                    type="text"
                    name="name"
                    placeholder={translations[selectedLanguage].full_name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder={translations[selectedLanguage].phone_number}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={translations[selectedLanguage].email_address}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder={translations[selectedLanguage].request_content}
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                
                <button type="submit">{translations[selectedLanguage].submit}</button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </div>
    );
}

export default ContactForm;
