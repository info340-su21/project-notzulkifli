import React from 'react';
import ReactDOM  from 'react';


export function body() {
    return(
        <div>
            <navigation />
            <main />
        </div>
    );
}

function navigation() {
    return(
        <header>
            <img className="logo" src="img/Logo.png" alt="Mobile Nutrition Logo"></img>
            <nav>
                <ul>
                    <a href="index.html"><img src="img/home-icon.png" className="nav-icons"></img><li className="nav-text">Home</li></a>
                    <a href="explore.html"><img src="img/explore-icon.png" className="nav-icons"></img><li className="nav-text">Explore</li></a>
                    <a href="myplan.html"><img src="img/calendar-icon.png" className="nav-icons"></img><li className="nav-text">My Plan</li></a>
                    <a href="about.html"><img src="img/aboutus-icon.png" className="nav-icons"></img><li className="nav-text">About Us</li></a>
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
        <h1 className="day-header"><img src="../project-draft/img/left-arrow.png" className="day-arrow"></img>&nbsp;Day 1/20&nbsp;<img src="../project-draft/img/right-arrow.png" className="day-arrow"></img></h1>
        <p></p>
        <h2 className="day-header">Did you complete your plan for today?</h2>
        </body>
    );
}



ReactDOM.render(<body/>, document.getElementById('root'));