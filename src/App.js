import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AddCard from "./Pages/Create.js";
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
  const [cards, setCards] = useState(cardArray);

  return (
    <div className="App">
      <Header />
      <main>
        {page === "home" && <Home cardArray={cards} />}
        {page === "bookmark" && <Bookmark cardArray={cards} />}
        {page === "profile" && <Profile />}
        {page === "addCard" && <AddCard />}
        <Navigation currentPage={page} navigateTo={setPage} />
      </main>
    </div>
  );
}

export default App;

export function appendCard({ question, answer, tags }) {}
