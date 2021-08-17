export function Navigation() {
    return (
        <header>
            <img className="logo" src="img/Logo.png" alt="Mobile Nutrition Logo"></img>
            <nav>
                <ul>
                    <a href="index.html"><img src="img/home-icon.png" className="nav-icons" alt="Drawing of a house/home"></img><li className="nav-text">Home</li></a>
                    <a href="explore.html"><img src="img/explore-icon.png" className="nav-icons" alt="Magnifying glass with globe in the middle"></img><li className="nav-text">Explore</li></a>
                    <a href="myplan.html"><img src="img/calendar-icon.png" className="nav-icons" alt="A cartoon drawing of a calendar"></img><li className="nav-text">My Plan</li></a>
                    <a href="about.html"><img src="img/aboutus-icon.png" className="nav-icons" alt="A cartoon drawing of a group of people"></img><li className="nav-text">About Us</li></a>
                </ul>
            </nav>
        </header>
    );
}