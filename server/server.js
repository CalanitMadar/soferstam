require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3001; // Port from .env or default to 3001

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token
const client = twilio(accountSid, authToken);

const businessWhatsappNumber = process.env.WHATSAPP_NUMBER; // מספר הווטסאפ של בעל העסק
const twilioWhatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER; // מספר הווטסאפ הווירטואלי של Twilio

app.use(bodyParser.json());
app.use(cors());

app.post('/send-message', async (req, res) => {
    const { name, phone, email, message } = req.body;

    const whatsappMessage = `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\nהודעה: ${message}`;

    try {
        await client.messages.create({
            body: whatsappMessage,
            from: twilioWhatsappNumber,
            to: businessWhatsappNumber
        });

        res.status(200).send('Message sent');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
