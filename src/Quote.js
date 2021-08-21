import React from 'react';
import 'whatwg-fetch';
import { useState } from 'react';


export default function Quote() {

    const [quotes, setQuotes] = useState(null);
    function handleClick() {

        fetch('/quotes_data.json')
        .then(function(response) {
            let dataPromise = response.json();
            return dataPromise;
        })
        .then(function(data) {
            setQuotes(data);
            let randomNum = Math.floor(Math.random() * data.length)
            let randomAuthor = quotes[randomNum].Author;
            let randomQuote = quotes[randomNum].Quote;
            if (!randomAuthor) {
                randomAuthor = "unknown author";
            }
            setQuotes({Author: randomAuthor, Quote: randomQuote})
        })
        .catch (function(error) {
            console.log(error.message);
        })
    }
    return (
        <button onClick={handleClick}>Double click on this button to recieve your daily inspirational quote {quotes === null ? <div></div> : <p>{quotes.Quote}{quotes.Author}</p>}</button>
    )
}
