console.log('client.js is loaded');
$(document).ready(onReady);

function onReady() {
    displayStartupQuotes();
    $('#submit').on('click', addQuote);
}

function displayStartupQuotes() {
    displayQuote();
    console.log('jQuery is loaded');
    $.ajax({
        type: 'GET', //does not need to be all caps, but convention
        url: '/all-quotes'
    })
    .then(function(response) {
        console.log(response);
    });
    $('#quoteButt').on('click', displayQuote);
    displayAllQuotes();
}

function displayQuote() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
    .then(function(response) {
        // console.log(response);
        $('#theQuote').text(response);
    });
}

function displayAllQuotes() {
    $('#allQuotes').empty();
    $.ajax({
        type: 'GET', //does not need to be all caps, but convention
        url: '/all-quotes'
    })
    .then(function(response) {
        $('#allQuotes').append(formatQuotesList(response));
    });
}

function addQuote() {
    let quote = {
        quote: $('#quoteInput').val(),
        author: $('#authorInput').val()
    };
    console.log(quote);
    $('#quoteInput').val('');
    $('#authorInput').val('');
    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: quote
    }).then(function(response) {
        displayAllQuotes();
    });
}

function formatQuotesList(quotes_data) {
    let quotesString = '<ul>';
    quoteStringMaker = (item) => {
        quotesString += '<li>"' + item.quote + '" -' + item.author + '</li>';
    }
    
    quotes_data.forEach(quoteStringMaker);
    quotesString += '</ul>';
    return quotesString;
}

