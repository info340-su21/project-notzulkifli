import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { AboutUs } from "./About";
import { MainHome } from "./Home";
import { MyPlan } from "./myPlan";

export function Navigation() {
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
            </Route>
            <Route path="/About">
                <AboutUs />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}