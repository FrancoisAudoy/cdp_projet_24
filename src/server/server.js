//'use strict';

const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 8080;
const HOST = '0.0.0.0';
var DBURL = 'mongodb://mongodb:27017/cdp';

mongoose.connect(DBURL, { useNewUrlParser: true }).catch(function (error) {
    console.log('Can\'t connect to MongoDB, error : ', error);
});


const jsonParser = bodyparser.json();
const app = express();

app.use(cors());

let listProjet = [];

app.get('/projets', (req, res) => {
    res.send(JSON.stringify({name : 'First Projet'}));
});

app.get('/projet/:projet', (req,res) => {
    res.send("Les backlogs du projet " + req.params.projet);
});

app.put('/projets',jsonParser, (req, res) => {
    res.end(JSON.stringify({name : 'First Projet'}));
});

app.delete('/projets', jsonParser, (req,res) => {
    
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
