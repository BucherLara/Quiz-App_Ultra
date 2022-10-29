import Card from "../Card/Card.js";

export default function Bookmark({ cardArray, deleteCard, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cardArray.map(
        (card) =>
          card.isBookmarked && (
            <Card
              key={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              isBookmarked={card.isBookmarked}
              toggleBookmark={toggleBookmark}
              deleteCard={deleteCard}
            />
          )
      )}
    </ul>
  );
}
