const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: { headless: false }, 
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
