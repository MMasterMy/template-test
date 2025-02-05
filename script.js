
let apiQuotes = [];
// Show new quote
function newQuote(){
    // Pick a random quote from apiQuotes array
   const Quote = apiQuotes [Math.floor(Math.random()*apiQuotes.length)];
   console.log (Quote);
}
// Get quotes from API
async function getQuotes() {
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
// On load
getQuotes ();
// newQuote();

    
