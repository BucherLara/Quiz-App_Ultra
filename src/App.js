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
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "HUHU",
    tags: tagItems,
  },
  {
    question: "Lorem didorium?",
    answer: "HAHAH",
    tags: tagItems2,
  },
  {
    question: "Warum stinkt Kevin?",
    answer: "Weil er immer stinkt",
    tags: ["Kacka", "Schweiß", "Pipi", "Gammel"],
  },
  {
    question: "Warum ist Lea so dumm?",
    answer: "Weil lea kein hirn hat",
    tags: ["leer", "nixdrin", "dummdideldumm", "rülps"],
  },
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header />
      <main>
        <ul className="card-list">
          {cardArray.map((card) => (
            <Card
              question={card.question}
              answer={card.answer}
              tags={card.tags}
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
