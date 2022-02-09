import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ViewSingleArticle from "./components/ViewSingleArticle";
import ViewArticles from "./components/ViewArticles";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ViewArticles />} />
          <Route path="/articles/:article_id" element={<ViewSingleArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
