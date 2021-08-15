import React from 'react';
import ReactDOM  from 'react';


export function body() {
    return(
        <navigation />
        <main />
    );
}

function navigation() {
    return(
        <header>
            <img class="logo" src="img/Logo.png" alt="Mobile Nutrition Logo"></img>
            <nav>
                <ul>
                    <a href="index.html"><img src="img/home-icon.png" class="nav-icons"></img><li class="nav-text">Home</li></a>
                    <a href="explore.html"><img src="img/explore-icon.png" class="nav-icons"></img><li class="nav-text">Explore</li></a>
                    <a href="myplan.html"><img src="img/calendar-icon.png" class="nav-icons"></img><li class="nav-text">My Plan</li></a>
                    <a href="about.html"><img src="img/aboutus-icon.png" class="nav-icons"></img><li class="nav-text">About Us</li></a>
                </ul>
            </nav>
        </header>
    );
}

function main() {
    return(
        <main>
            <intro />
        </main>
    );
}

function intro() {
    return(
        <body>
        <h1 class="day-header"><img src="../project-draft/img/left-arrow.png" class="day-arrow"></img>&nbsp;Day 1/20&nbsp;<img src="../project-draft/img/right-arrow.png" class="day-arrow"></img></h1>
        <p></p>
        <h2 class="day-header">Did you complete your plan for today?</h2>
        </body>
    );
}



ReactDOM.render(<body/>, document.getElementById('root'));