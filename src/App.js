import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AddCard from "./Pages/AddCard.js";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import Bookmark from "./Pages/Bookmark.js";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header />
      <main>
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
