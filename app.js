const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 8080;
const domain = 'doovy.gg';

app.engine('.html', exphbs({
    defaultLayout: 'main',
    extname: '.html'
}));
app.set('view engine', '.html');

// routing

app.get('/', (req, res) => {
    res.render('index', {title: `Home - ${domain}`});
});

app.get('/about', (req, res) => {
    res.render('about', {title: `About - ${domain}`});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));