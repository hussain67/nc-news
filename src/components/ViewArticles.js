import React, { useEffect, useState } from "react";
import { getArticles, getArticlesByTopic } from "../utils/api";
import Articles from "./Articles";
import Nav from "./Nav";

const ViewArticles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("coding");

  useEffect(() => {
    getArticles().then(res => {
      // console.log(res.articles);
      setArticles(res.articles);
    });
  }, []);

  useEffect(() => {
    getArticlesByTopic(topic);
  }, []);
  return (
    <>
      <Nav />
      <Articles articles={articles} />
    </>
  );
};

export default ViewArticles;
