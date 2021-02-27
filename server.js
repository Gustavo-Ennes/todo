const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'my-app', 'public')));

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});