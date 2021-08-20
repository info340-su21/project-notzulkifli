import React from 'react'; //import React library
import ReactDOM from 'react-dom';

export function renderCard(props) {
    const cardInfo = props;
    return (
        <a className="explore-card-button" type="button" href="sample_page_pushups.html" role="button">
            <div className="explore-card-body">
                <div>
                    <h3 className="explore-card-title">
                        {cardInfo.title}
                    </h3>
                </div>
                <div className="card-body-content">
                     <div className="card-img-crop">
                        <img src={cardInfo.picture} alt={cardInfo.title}/>
                     </div>
                    <p>
                        {cardInfo.desc}
                    </p>
                </div>
            </div>
        </a>
    )
}

export function TutorialContainer(props) {
    const deckInfo = props.deckInfo;
    const cards = deckInfo.map(renderCard);
    return (
        <div class="tutorial-container">
            <h2 class="container-header">Exercise Tutorials:</h2>
            <p class="time-posted">Information updated <time datetime="2021-08-04">8/4/2021</time> </p>
            <div class="tutorial-content-container">
                {cards}
            </div>
        </div>
    )
}

export function ExploreContainer(props) {
    const deckInfo = props.deckInfo;
    const title = "test Title";
    return (
        <main>
            <h1 class="page-title">{title}:</h1>
            <section>
                <div class="container">
                    < TutorialContainer deckInfo={deckInfo}/>
                </div>
            </section>
        </main>
    )
}