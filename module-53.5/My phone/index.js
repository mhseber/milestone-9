const express = require('express');
const phones = require('./Phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('My Phone Information Coming soon MH seber')
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    console.log('i need data for id:', id)
});

app.listen(port, () => {
    console.log(`My phone server is Running on Port: ${port}`)
});