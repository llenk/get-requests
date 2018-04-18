console.log('client.js is loaded');
$(document).ready(onReady);

function onReady() {
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
    $.ajax({
        type: 'GET', //does not need to be all caps, but convention
        url: '/all-quotes'
    })
    .then(function(response) {
        $('#allQuotes').append(response);
    });
}