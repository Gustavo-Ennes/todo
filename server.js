const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const apiRouter = require('./routes/apiRouter');
const indexRouter = require('./routes/indexRouter');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'my-app', 'dist')));
app.use('/api/', apiRouter);
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});