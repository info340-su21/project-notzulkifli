import Quote  from './Quote'
export function MainHome() {
    return (
            <main>
                <div className="bodyDesign">
                    <div>
                   <h1 className="HomePageDesign">Welcome to Mobile Nutrition!</h1>
                   <img src='img/axiom-series.jpg' alt="Gym Picture"></img>
                   </div>
                   <div>
                    <Quote />
                </div>
                </div>
                
            </main>
             );
            } 