import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].text);
      setAuthor(quotes[randomIndex].author);
    }
  }, [quotes]);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  const handleTweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="container">
      <h2 id="text">{quote}</h2>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a id="tweet-quote" href="#" onClick={handleTweetQuote} target="_blank">Tweet Quote</a>
    </div>
  );
}

export default App;