
export default function ExploreExerciseAnalyze(props) {
    const cardInfo = props.cardInfo;
    const title = cardInfo.title;
    return (
        <div class="explore-analysis-container">
            <div class="explore-analysis-section1">
                <h2 class="container-header">Targetted Muscle Groups:</h2>
                <div class="captioned-img-container">
                    <div class="card-analyze-section1-img-crop">
                        <img src={cardInfo.musclePicture} alt="muscle groups analysis"/>
                    </div>
                    <h3>{cardInfo.muscles}</h3>
                </div>
            </div>

            <div class="explore-analysis-section2">
                <div class = "explore-analysis-section2-container">
                    <h2 class="container-header">Training:</h2>
                    <div class="captioned-img-container">
                        <div class="card-analyze-img-crop">
                            <img src={cardInfo.picture} alt={cardInfo.title}/>
                        </div>
                        <p> Practice tutorial video <a class="hyperlink-text" href={cardInfo.practiceLink}>Here!</a> </p>
                        <p>{cardInfo.desc}</p>
                        <p>{cardInfo.inDepth}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}