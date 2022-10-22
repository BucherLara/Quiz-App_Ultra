import Card from "./Card/Card.js";
import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AddCard from "./Pages/AddCard.js";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import Bookmark from "./Pages/Bookmark.js";
import { useState } from "react";

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

function App() {
  const [page, setPage] = useState("home");
  console.log(page);

  return (
    <div className="App">
      <Header />
      <main>
        <ul className="card-list">
          {cardArray.map((card) => (
            <Card
              key={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              isBookmarked={card.isBookmarked}
            />
          ))}
        </ul>
        {page === "home" && <Home />}
        {page === "bookmark" && <Bookmark />}
        {page === "profile" && <Profile />}
        {page === "addCard" && <AddCard />}
        <Navigation currentPage={page} navigateTo={setPage} />
      </main>
    </div>
  );
}

export default App;
