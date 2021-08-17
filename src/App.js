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
            < Main />
            < Footer />
        </div>
    )
}

function Main() {
    return (
        <main>
            <body>
                <h1 className="day-header"><img src="img/left-arrow.png" className="day-arrow" alt="Arrow pointing left"></img>&nbsp;Day 1/20&nbsp;<img src="img/right-arrow.png" className="day-arrow" alt="Arrow pointing right"></img></h1>
                <p></p>
                <h2 className="day-header">Did you complete your plan for today?</h2>
                <section className="objective">
                    <div className="box-border">
                        <form method="POST" action="/">
                            <p><img src="img/Hamburger-Emoji-1024x1024.png" className="header-img" alt="A cartoon drawing of Hamburger"></img>Diet Plan:</p>
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
                    <div className="box-border">
                        <form action="">
                            <p><img src="img/dumbell.jpg" className="header-img" alt="A cartoon drawing of a dumbell/weight"></img>Exercise Plan:</p>
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

ReactDOM.render(<App />, document.getElementById('root'));
