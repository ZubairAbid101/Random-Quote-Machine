function App() {

    const [quotesArray, setQuotesArray] = React.useState([])
    const [initialRandomQuote, setInitialRandomQuote] = React.useState([])
    const [onClickRandomQuote, setOnClickRandomQuote] = React.useState([])

    /* Making an API Call */
    React.useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setQuotesArray(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setInitialRandomQuote(data[randomIndex])
        });
    }, [])

    /* Setting the onClick Event Listener */
    function handleClick () {
        let randomIndex = Math.floor(Math.random() * quotesArray.length);
        setOnClickRandomQuote( quotesArray[randomIndex] )
        setInitialRandomQuote([])
    }

    return (
        <div id="quote-box">
            <div id="text">{initialRandomQuote.text || onClickRandomQuote.text}</div>
            <div id="author">{initialRandomQuote.author || onClickRandomQuote.author}</div>
            <div id="link-and-new-quote-wrapper">
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
                    <img src="./images/twitter.svg" />
                </a>
                <button 
                id="new-quote"
                onClick={handleClick}>New Quote</button>
                </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)