import Card from "../Card/Card.js";
import Home from "./Home.js";

const tagItems = ["Bla", "blubb", "hallo", "Huhu", "dumm", "doof"];
const tagItems2 = ["Mumps", "Masern", "Scharlach", "Röteln", "Pest", "Grippe"];
const cardArray = [
  {
    id: 1,
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "HUHU",
    tags: tagItems,
    isBookmarked: true,
  },
  {
    id: 2,
    question: "Lorem didorium?",
    answer: "HAHAH",
    tags: tagItems2,
    isBookmarked: true,
  },
  {
    id: 3,
    question: "Warum stinkt Kevin?",
    answer: "Weil er immer stinkt",
    tags: ["Kacka", "Schweiß", "Pipi", "Gammel"],
    isBookmarked: false,
  },
  {
    id: 4,
    question: "Warum ist Lea so dumm?",
    answer: "Weil lea kein hirn hat",
    tags: ["leer", "nixdrin", "dummdideldumm", "rülps"],
    isBookmarked: true,
  },
];

export default function Bookmark() {
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
            />
          )
      )}
    </ul>
  );
}
