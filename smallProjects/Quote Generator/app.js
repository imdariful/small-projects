// !Selecting DOM
const container = document.getElementById("container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const twitter = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// !Functions
// Fetch Quote From API
const getQuote = () => {
  showLoadingSpinner();
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const apiURL =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&&format=json";
  axios
    .get(proxyURL + apiURL)
    .then((result) => {
      // taking the data into a variable
      const fetchedQuote = result.data.quoteText;
      const fetchedAuthor = result.data.quoteAuthor;
      // If quote author not found add unknown
      if (fetchedAuthor === "") {
        author.innerText = "Unknown";
      } else {
        author.innerText = fetchedAuthor;
      }
      // If quote are long the add long quote class
      if (fetchedQuote.length > 120 || fetchedQuote.length === "undefined") {
        quote.classList.add("long-quote-text");
      } else {
        quote.classList.remove("long-quote-text");
      }
      quote.innerText = fetchedQuote;
      removeLoadingSpinner();
    })
    .catch((err) => {
      for (let i = 0; i < 10; i++) {
        console.log("Opps! no data found!", getQuote);
      }
    });
};

// Tweet Quote
const tweetQuote = () => {
  const fetchedQuote = quote.innerText;
  const fetchedAuthor = author.innerText;
  const tweetURL = `https://twitter.com/intent/tweet?text=${fetchedQuote}. - ${fetchedAuthor}`;
  window.open(tweetURL, "_blank");
  // https://twitter.com/intent/tweet
};

// Loading Function
const showLoadingSpinner = () => {
  loader.hidden = false;
  container.hidden = true;
};
const removeLoadingSpinner = () => {
  if (!loader.hidden) {
    container.hidden = false;
    loader.hidden = true;
  }
};
// !Event Listener
newQuote.addEventListener("click", getQuote);
twitter.addEventListener("click", tweetQuote);

// !On Load
getQuote();
