import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HeadMetadata } from './HeadMetaData';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export default function App() {
    const [favoriteCard, setExerciseBookmark] = useState([]);

    const handleExerciseBookmark = (card) => {
        favoriteCard.push(card);
        let updatedBookmarkExerciseCards = favoriteCard;
        setExerciseBookmark(updatedBookmarkExerciseCards)
    }

    return (
        <div>
            < HeadMetadata />
            < Navigation handleExerciseBookmark={handleExerciseBookmark} favoriteCard={favoriteCard}/>
            < Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
