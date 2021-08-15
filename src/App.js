import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <html>
            < HeadMetadata />
            < Navigation />
            < Main />
            < Footer />
        </html>
    )
}

function Main() {
    return (
        <main>
            <body>
                <h1 class="day-header"><img src="img/left-arrow.png" class="day-arrow"></img>&nbsp;Day 1/20&nbsp;<img src="img/right-arrow.png" class="day-arrow"></img></h1>
                <p></p>
                <h2 class="day-header">Did you complete your plan for today?</h2>
                <section class="objective">
                    <div class="box-border">
                        <form method="POST" action="/">
                            <p><img src="img/Hamburger-Emoji-1024x1024.png" class="header-img"></img>Diet Plan:</p>
                            <input type="checkbox" id="task1" name="task1" value="Breakfast"></input>
                            <label for="task1">Breakfast:
                                <p>&emsp;&emsp;Orange Juice</p>
                                <p>&emsp;&emsp;Eggs</p>
                                <p>&emsp;&emsp;Oatmeal</p>
                            </label>
                            <input type="checkbox" id="task2" name="task2" value="Lunch"></input>
                            <label for="task2">Lunch:
                                <p>&emsp;&emsp;Avacado</p>
                                <p>&emsp;&emsp;Burger</p>
                                <p>&emsp;&emsp;32oz Water</p>
                            </label>
                            <input type="checkbox" id="task3" name="task3" value="Dinner"></input>
                            <label for="task3">Dinner:
                                <p>&emsp;&emsp;Lean Chicken </p>
                                <p>&emsp;&emsp;Brown Rice</p>
                                <p>&emsp;&emsp;32oz Water</p>
                                <p>&emsp;&emsp;Yogurt</p>
                            </label>
                            <input type="submit" value="submit"></input>
                        </form>
                    </div>
                    <div class="box-border">
                        <form action="">
                            <p><img src="img/dumbell.jpg" class="header-img"></img>Exercise Plan:</p>
                            <input type="checkbox" id="task4" name="task4" value="workout1"></input>
                            <label for="task4">Upper Body:
                                <p>&emsp;&emsp;3x15 Pushups</p>
                                <p>&emsp;&emsp;3x10 Dips</p>
                                <p>&emsp;&emsp;3x5 pull ups</p>
                            </label><br></br>
                            <input type="checkbox" id="task5" name="task5" value="workout2"></input>
                            <label for="task5">Legs:
                                <p>&emsp;&emsp;3x15 Squat Jumps</p>
                                <p>&emsp;&emsp;3x15 Lunges</p>
                            </label><br></br>
                            <input type="checkbox" id="task6" name="task6" value="workout3"></input>
                            <label for="task6">Abs:
                                <p>&emsp;&emsp;3x15 sit-ups</p>
                                <p>&emsp;&emsp;30 Russian-twists</p>
                                <p>&emsp;&emsp;1 minute plank</p>
                                <input type="submit" value="submit"></input>
                            </label>
                        </form>
                    </div>
                </section>
            </body>
        </main>
    );
}


//header data from each html page
export function HeadMetadata() {
    return (
        <head>
            <meta charset="utf-8"></meta>
            <meta name="author" content="John Boyle, Shriyansh Sharma, and Zulkifli Sales"></meta>
            <meta name="description" content="A page that helps with users with exercise and nutrition"></meta>
            <link href="css/style.css" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@900&family=Open+Sans&display=swap" rel="stylesheet"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
            <link rel="shortcut icon" type="image/png" href="img/favicon-32x32.png"></link>
            <title>Guide to Beginner Fitness</title>
        </head>
    );
}



export function Navigation() {
    return (
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

export function Footer() {
    return (
        <footer>
            <p>&copy; Group 13: John Boyle, Shriyansh Sharma, and Zulkifli Sales of class INFO 340</p>
            <p>Undergraduate students at the<a href="https://www.washington.edu/"> University of Washington (Seattle)</a></p>
            <address>Contact us at:
                <a href="mailto:zsales@uw.edu" class="contact">zsales@uw.edu</a>
                <h3>Follow our social media pages:</h3>
                <p>
                    <i class="fa fa-facebook" style={{ fontSize: '48px', color: 'white' }}></i>
                    <i class="fa fa-twitter" style={{ fontSize: '48px', color: 'white' }}></i>
                    <i class="fa fa-github" style={{ fontSize: '48px', color: 'white' }}></i>
                </p>
            </address>
        </footer>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
