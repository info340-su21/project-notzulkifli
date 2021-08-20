import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { AboutUs } from "./About";
import { MainHome } from "./Home";
import { MyPlan } from "./myPlan";
import { ExploreContainer } from "./ExploreContainer";
import ExploreExerciseAnalyze from "./ExploreExerciseAnalyze";
import ExploreNutritionAnalyze from "./ExploreNutritionAnalyze";

const exerciseInfo = [
    {title: "Pushups",
    picture: "img/pushupExplore.jpg",
    desc: "The pushup is a basic and extremley effective exercise targetted for the upper chest and tricep muscles.",
    inDepth: "Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines. While the push-up primarily targets the muscles of the chest, arms, and shoulders, support required from other muscles results in a wider range of muscles integrated into the exercise.",
    musclePicture: "img/pushup-target-muscles.jpg",
    muscles: "Triceps, Chest",
    practiceLink: "https://www.youtube.com/watch?v=IODxDxX7oi4&ab_channel=Calisthenicmovement"},

    {title: "Pullups",
    picture: "img/pullupExploreCard.png",
    desc: "A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up.",
    inDepth: "Do not be daunted if the idea of smashing out 10 pull-ups seems laughable right now, there are plenty of ways to build up to even your first full pull-up. Start by getting used to your own bodyweight by holding a dead hang for as long as possible without even bothering to try and pull yourself up.",
    musclePicture: "img/pullup-target-muscles.jpg",
    muscles: "Biceps, Deltoids",
    practiceLink: "https://www.youtube.com/watch?v=FnWrvWZDJTo&ab_channel=Calisthenicmovement"},

    {title: "Bench Press",
    picture: "img/bench-press.jpg",
    desc: "The bench press, or chest press, is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.",
    inDepth: "The barbell bench press is one of three lifts in the sport of powerlifting alongside the deadlift and squat, and is the only lift in the sport of Paralympic powerlifting. It is also used extensively in weight training, bodybuilding, and other types of training to develop the chest muscles.",
    musclePicture: "img/bench-press-muscles.jpg",
    muscles: "Biceps, Chest",
    practiceLink: "https://www.youtube.com/watch?v=rT7DgCr-3pg&ab_channel=ScottHermanFitness"},

];

const nutritionInfo = [
    {title: "Paleo",
    picture: "img/paleo-diet-plan.jpg",
    desc: "The Paleolithic diet, Paleo diet, caveman diet, or stone-age diet is a modern fad diet consisting of foods thought by its proponents to mirror those eaten by humans during the Paleolithic era.",
    foodGroupPicture: "img/paleo-diet-pyramid.jpg",
    advantages: "Weight Loss, Improved blood markers (cholesterol, triglycerides, insulin, Decrease consumption of hyperpalatable foods.",
    practiceLink: "https://www.youtube.com/watch?v=w07W0D9z6v4&ab_channel=DoctorOz"},

    {title: "Vegan",
    picture: "img/vegan-diet.jpg",
    desc: "Veganism is defined as a way of living that attempts to exclude all forms of animal exploitation and cruelty, whether for food, clothing or any other purpose.",
    foodGroupPicture: "img/paleo-diet-pyramid.jpg",
    advantages: "Weight Loss, Positive Enrivonmental Effects, Can offer protective health benefits against common diseases such as heart disease.",
    practiceLink: "https://www.youtube.com/watch?v=w07W0D9z6v4&ab_channel=DoctorOz"},
];

export function Navigation() {
    function renderExerciseExploreRoute(cardInfo) {
        return (
            <Route path={"/"+cardInfo.title}>
                <h1 class="page-title">{cardInfo.title}</h1>
                <section>
                    <ExploreExerciseAnalyze cardInfo={cardInfo}/>
                </section>
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
    const exploreExerciseRoutes = exerciseInfo.map(renderExerciseExploreRoute)
    const exploreNutritionRoutes = nutritionInfo.map(renderNutritionExploreRoute)

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
            <Route path="/Explore">
                <main>
                    <h1 class="page-title">Explore:</h1>
                    <section>
                        <ExploreContainer title="Exercise Tutorials:" deckInfo={exerciseInfo}/>
                        <ExploreContainer title="Nutritional + Dietary Tutorials:" deckInfo={nutritionInfo}/>
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