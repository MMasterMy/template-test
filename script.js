const quoteContainer = document.getElementById ("quote-container");
const quoteText = document.getElementById ("quote");
const quoteAuthor = document.getElementById ("author");
const twitterBtn = document.getElementById ("twitter");
const newQuoteBtn = document.getElementById ("new-quote");
const loader = document.getElementById ("loader");
let apiQuotes = [];
// show lodding
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide loding
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Show new quote
function newQuote(){
    loading();
    // Pick a random quote from apiQuotes array
   const Quote = apiQuotes [Math.floor(Math.random()*apiQuotes.length)];

    // Replace Null with "Unknown"  
    if (!Quote.author) {
        quoteAuthor.textContent = "Unknown";
    } else {
        quoteAuthor.textContent = Quote.author;
    }
    // Check text length and change styling
    if (Quote.text.length > 50) {
        quoteText.classList.add ('Long-quote');
        } else {
        quoteText.classList.remove ('Long-quote'); 
        }
    quoteText.textContent = Quote.text;
    complete();
}
// Get quotes from API
async function getQuotes() {
    loading();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        response = await fetch (apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();
    }catch (error) {
        // Catch error here
    }
}
// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On load
getQuotes ();
// newQuote();

    
