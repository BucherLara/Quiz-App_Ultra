import Card from "../Card/Card.js";

export default function Home({ cardArray, deleteCard, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cardArray.map((card) => (
        <Card
          key={card.id}
          cardId={card.question}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          isBookmarked={card.isBookmarked}
          deleteCard={deleteCard}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </ul>
  );
}
