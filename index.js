const venom = require('venom-bot');

venom.create().then((client) => {
    client.onMessage(async (message) => {
        try {
            // Splitting incoming message to separate command and arguments
            const [command, ...args] = message.body.trim().split(' ');

            // Switch case to handle different commands
            switch (command.toLowerCase()) {
                case 'hello':
                    await client.sendText(message.from, 'Hello! How can I assist you?');
                    break;
                case 'echo':
                    const echoMessage = args.join(' ');
                    await client.sendText(message.from, echoMessage);
                    break;
                // Add more cases for additional commands as needed
                default:
                    await client.sendText(message.from, 'Sorry, I don\'t understand that command.');
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });
}).catch((error) => {
    console.error('Error creating bot:', error);
});
