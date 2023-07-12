const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Connect to the Mongo DB
//mongoose.connect("mongodb://admin:password123@ds031183.mlab.com:31183/flow-sheet-app", { useNewUrlParser: true });
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('open', function () {
//     console.log('Connected correctly to database');
// });

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/learnMoreHis', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/learnMoreHis.html'));
});

app.get('/learnMoreEvents', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/learnMoreEvents.html'));
});

app.get('/learnMorePizza', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/learnMorePizza.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/events.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});
