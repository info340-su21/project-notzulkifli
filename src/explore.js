import React from 'react';
import ReactDOM from 'react-dom';
import { HeadMetadata } from './HeadMetaData';
import { MainHome } from './Home';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

const props1 = [
    {title: "Pushups", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
    {title: "Pullups", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
    {title: "Benchpress", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
    {title: "Benchpressasdasdsa", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"}
];

const props2 = [
{title: "Vegan", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
{title: "Pullups", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
{title: "Benchpress", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"},
{title: "Benchpressasdasdsa", picture: "img/pushupExplore.jpg", desc: "lorem ibusm"}
];

export default function App() {
    return (
        <div>
            < HeadMetadata />
            < Navigation />

            < ExploreContainer deckInfo={props1}/>
            < ExploreContainer deckInfo={props2}/>

            < Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
