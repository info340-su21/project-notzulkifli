import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { AboutUs } from "./About";
import { MainHome } from "./Home";
import { MyPlan } from "./myPlan";
import { ExploreContainer } from "./ExploreContainer";
import ExploreExerciseAnalyze from "./ExploreExerciseAnalyze";
import ExploreNutritionAnalyze from "./ExploreNutritionAnalyze";
import BookmarkCardButton from './BookmarkCardButton';

import ExerciseAndDiets from './ExerciseAndDiets.json';

import React, { useState } from 'react';

export function Navigation(props) {
    //bookmarks
    //const bookmarkedExerciseCards = [];
    
    //const bookmarkedNutritionCards = [];

    //search displays
    const displayedExerciseCards = [];
    const displayedNutritionCards = [];

    /*function handleExerciseBookmark(cardInfo) {
        console.log(bookmarkedExerciseCards);
        let includes = false;
        if (includes == false) {
            bookmarkedExerciseCards.push(cardInfo)
        }
    } */

    function renderExerciseExploreRoute(cardInfo) {
        return (
            <Route path={"/"+cardInfo.title}>
                <h1 class="page-title">{cardInfo.title}</h1>
                <section>
                    <ExploreExerciseAnalyze cardInfo={cardInfo}/>
                </section>
                <BookmarkCardButton cardInfo={cardInfo} howToHandleClick={props.handleExerciseBookmark}/>
            </Route>
        )
    }
    function renderNutritionExploreRoute(cardInfo) {
        return (
            <Route path={"/"+cardInfo.title}>
                <h1 class="page-title">{cardInfo.title}</h1>
                <section>
                    <ExploreNutritionAnalyze cardInfo={cardInfo}/>
                </section>
            </Route>
        )
    }
    
    const exploreExerciseRoutes = ExerciseAndDiets.exerciseInfo.map(renderExerciseExploreRoute);
    const exploreNutritionRoutes = ExerciseAndDiets.nutritionInfo.map(renderNutritionExploreRoute);

    const [searchTerm, setSearchTerm] = useState("");

    function searchTermHelper(val) {
        if (searchTerm == "") {
            return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
        }
    }
    
    return (
        <BrowserRouter>
        <header>
            <img className="logo" src="img/Logo.png" alt="Mobile Nutrition Logo"></img>
            <nav>
                <ul>
                    <Link to="/"><img src="img/home-icon.png" className="nav-icons" alt="Drawing of a house/home"></img><li className="nav-text">Home</li></Link>
                    <Link to="/Explore"><img src="img/explore-icon.png" className="nav-icons" alt="Magnifying glass with globe in the middle"></img><li className="nav-text">Explore</li></Link>
                    <Link to="/myPlan"><img src="img/calendar-icon.png" className="nav-icons" alt="A cartoon drawing of a calendar"></img><li className="nav-text">My Plan</li></Link>
                    <Link to="/About"><img src="img/aboutus-icon.png" className="nav-icons" alt="A cartoon drawing of a group of people"></img><li className="nav-text">About Us</li></Link>
                </ul>
            </nav>
        </header>

        <Switch>
            <Route exact path="/">
                <MainHome />
            </Route>
            <Route path="/MyPlan">
                <MyPlan />
                <ExploreContainer title="Favorite Exercise:" deckInfo={props.favoriteCard}/>
            </Route>
            <Route path="/Explore">
                <main>
                    <h1 class="page-title">Explore:</h1>
                    <div className="searchBarExploreContainer">
                        <input
                            className="searchBarExplore"
                            type="text"
                            placeholder="Search..."
                            onInput={e => setSearchTerm(e.target.value)}
                            id="header-search"
                        />    
                    </div>
                    {ExerciseAndDiets.exerciseInfo.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        displayedExerciseCards.push(val)
                    })}
                    {ExerciseAndDiets.nutritionInfo.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        displayedNutritionCards.push(val)
                    })}
                    <section>
                        <ExploreContainer title="Exercise Tutorials:" deckInfo={displayedExerciseCards}/>
                        <ExploreContainer title="Nutritional + Dietary Tutorials:" deckInfo={displayedNutritionCards}/>
                    </section>
                </main>
            </Route>
            {exploreExerciseRoutes}
            {exploreNutritionRoutes}
            <Route path="/About">
                <AboutUs />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}