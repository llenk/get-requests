const express = require('express');

const app = express();
const PORT = 5000;

const quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});

app.get('/', function (req, res) {
    res.send('Happy Wednesday!');
});

let quotesString = '';
function quoteStringMaker(item) {
    quotesString += '"' + item.quote + '" -' + item.author + ' \n';
}
quotes_data.forEach(quoteStringMaker);

app.get('/all-quotes', function(req, res) {
    res.send(quotesString);
});