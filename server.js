const express = require('express');

const app = express();

app.get('/mysite', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('You are at the home page');
})
.get('/mysite/:page', (req, res) => {
    res.render('page.ejs', {page: req.params.page});
})

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Error 404 : page doesn\'t exist');
})

app.listen(8080);