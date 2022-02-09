import React, { useEffect, useState } from "react";
import { getArticles, getArticlesByQuery, getArticlesByTopic } from "../utils/api";
import Articles from "./Articles";
import Nav from "./Nav";

const ViewArticles = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    getArticles().then(res => {
      setArticles(res.articles);
    });
  }, []);

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic).then(res => {
        setArticles(() => res.articles);
      });
    }
  }, [topic]);

  useEffect(() => {
    if (query) {
      getArticlesByQuery(query).then(res => {
        setArticles(() => res.articles);
      });
    }
  }, [query]);
  return (
    <>
      <Nav setTopic={setTopic} setQuery={setQuery} />
      <Articles articles={articles} />
    </>
  );
};

export default ViewArticles;
