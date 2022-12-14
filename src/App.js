import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AddCard from "./Pages/Create.js";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import Bookmark from "./Pages/Bookmark.js";
import { useEffect, useState } from "react";

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
  const [cards, setCards] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("CardList") ?? cardArray);
    } catch (error) {
      console.warn(error);
      return cardArray;
    }
  });

  useEffect(() => {
    localStorage.setItem("CardList", JSON.stringify(cards));
  }, [cards]);

  function appendCard(question, answer, tags) {
    setCards((alterWert) => {
      const neuerWert = [
        ...alterWert,
        { question, answer, tags: [tags], isBookmarked: true, id: 4444444 },
      ];
      return neuerWert;
    });
  }
  function toggleBookmark(cardId) {
    setCards((cards) => {
      const neuerWert = cards.map((card) => {
        if (card.question === cardId) {
          return { ...card, isBookmarked: !card.isBookmarked };
        } else {
          return card;
        }
      });
      return neuerWert;
    });
  }

  function deleteCard(cardId) {
    setCards((cards) => {
      const neuesCardArray = cards.filter((card) => card.question !== cardId);
      return neuesCardArray;
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        {page === "home" && (
          <Home
            cardArray={cards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {page === "bookmark" && (
          <Bookmark
            cardArray={cards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )}
        {page === "profile" && <Profile />}
        {page === "addCard" && (
          <AddCard navigateTo={setPage} appendCards={appendCard} />
        )}
        <Navigation currentPage={page} navigateTo={setPage} />
      </main>
    </div>
  );
}

export default App;
