const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', ejs);

// public folder to store assets
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', (req, res) =>
{
    res.send('pad');
})

const port = process.env.PORT || 8000;
app.listen(port);