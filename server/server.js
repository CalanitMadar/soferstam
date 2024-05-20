require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token
const client = twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors());

app.post('/send-message', async (req, res) => {
    const { name, phone, email, message } = req.body;

    const whatsappNumber = process.env.WHATSAPP_NUMBER; // מספר הווטסאפ של בעל העסק בפורמט הנכון ל-Twilio
    const whatsappMessage = `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\nהודעה: ${message}`;

    try {
        await client.messages.create({
            body: whatsappMessage,
            from: process.env.TWILIO_WHATSAPP_NUMBER, // מספר הווטסאפ הווירטואלי שלך ב-Twilio
            to: whatsappNumber
        });

        res.status(200).send('Message sent');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message');
    }
});

// אין צורך להגדיר פורט בעצמך כאשר מריצים על Vercel
app.listen();
