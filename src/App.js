import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ViewSingleArticle from "./components/ViewSingleArticle";
import ViewArticles from "./components/ViewArticles";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ViewArticles />} />
          <Route path="/articles/:article_id" element={<ViewSingleArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
