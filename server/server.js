const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const quotes_data = require('./modules/quotes_data');

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/all-quotes', function(req, res) {
    res.send(quotes_data);
});

app.get('/quote', function(req, res) {
    res.send(randomQuote());
});

app.post('/add-quote', function(req, res) {
    console.log(req.body);
    quotes_data.push(req.body);
    res.sendStatus(200);
})

randomQuote = () => {
    let i = Math.floor(Math.random()*3);
    let quote = quotes_data[i];
    returnString = '"' + quote.quote + '" -' + quote.author;
    return returnString;
}
