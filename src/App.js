import React from 'react';
import ReactDOM from 'react-dom';
import { HeadMetadata } from './HeadMetaData';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export default function App() {
    return (
        <div>
            < HeadMetadata />
            < Navigation />
            < Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
