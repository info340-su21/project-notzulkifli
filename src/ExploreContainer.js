import React from 'react'; //import React library

export function renderCard(props) {
    const cardInfo = props;
    return (
        <a className="explore-card-button" type="button" href={"/"+cardInfo.title} role="button">
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
    const title = props.title;
    return (
        <div class="tutorial-container">
            <h2 class="container-header">{title}</h2>
            <p class="time-posted">Information updated <time datetime="2021-08-20">8/20/2021</time> </p>
            <div class="tutorial-content-container">
                {cards}
            </div>
        </div>
    )
}

export function ExploreContainer(props) {
    const deckInfo = props.deckInfo;
    const title = props.title;
    return (
        <section>
            <div class="container">
                < TutorialContainer title={title} deckInfo={deckInfo}/>
            </div>
        </section>
    )
}