export default function BookmarkCardButton(props) {
    const card = props.cardInfo;
    let displayText = "Favorite";

    const handleClick = (event) => {
        displayText = "Favorited!";
        props.howToHandleClick(card)
    }

    return (
        <div className="bookmarkButtonContainer">
            <button className="bookmarkButton" onClick={handleClick}>
                {displayText}
            </button>
        </div>
    );
}