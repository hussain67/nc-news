import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ViewSingleArticle from "./components/ViewSingleArticle";
import ViewArticles from "./components/ViewArticles";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { UserContext } from "./contexts/User";
import "./styles/Btn.css";
import "./styles/Loading.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
  });
  const isLoggedIn = loggedInUser !== null;
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
          <Header />
          <Routes>
            <Route path="/" element={<ViewArticles />} />
            <Route path="/articles/:article_id" element={<ViewSingleArticle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
