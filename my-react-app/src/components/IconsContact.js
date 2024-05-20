// IconsContact.js
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

import '../style/IconsContact.css'

const IconsContact = () => {

  const contactDetails = [

    {
      icon: <FaPhone />,
      label: 'Phone',
      color: '#4CAF50', // צבע ירוק של טלפון
    },
    {
        href: 'mailto:omanut.astam@gmail.com',
        icon: <FaEnvelope />,
        label: 'Email',
        color: '#D44638' // צבע אדום של Gmail
    },
    {
      href: 'https://wa.me/+972535925005', // לינק ישיר לווטסאפ
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      color: '#25D366' // צבע ירוק של WhatsApp
    }
  ];

  return (
    <div className="icons-contact">
      {contactDetails.map((contact, index) => (
        <a 
          key={index} 
          href={contact.href || '#'} 
          aria-label={contact.label} 
          target={contact.href ? "_blank" : "_self"} 
          rel={contact.href ? "noopener noreferrer" : undefined} 
          className="contact-icon"
          style={{ color: contact.color }}
          onClick={contact.onClick}
        >
          {contact.icon}
          {contact.label === 'Phone' && (
            <span className="phone-number"> 054-854-3906</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default IconsContact;
