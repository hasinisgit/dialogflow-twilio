const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));

    function welcomeIntent(agent) {
        agent.add('Hello! How can I help you?');
    }

    function loginIntent(agent) {
        // Your logic for handling the login intent
    }

    function getEmailIntent(agent) {
        // Your logic for handling the getEmail intent
    }

    function getPasswordIntent(agent) {
        // Your logic for handling the getPassword intent
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcomeIntent);
    intentMap.set('login', loginIntent);
    intentMap.set('GetEmail', getEmailIntent);
    intentMap.set('GetPassword', getPasswordIntent);

    agent.handleRequest(intentMap);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
