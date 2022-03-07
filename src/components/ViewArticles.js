import React, { useEffect, useState } from "react";
import { getArticles, getArticlesByQuery, getArticlesByTopic } from "../utils/api";
import Articles from "./Articles";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Page from "./Page";
import HeaderArticles from "./HeaderArticles";
import "../styles/Header.css";

const ViewArticles = () => {
  const [articles, setArticles] = useState();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then(res => {
        setArticles(res.articles);
        setIsLoading(false);
      })
      .catch(err => {
        console.log("Something wrong");
      });
  }, []);

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic).then(res => {
        setArticles(() => res.articles);
        setIsLoading(false);
      });
    }
  }, [topic]);

  useEffect(() => {
    if (query) {
      getArticlesByQuery(query).then(res => {
        setArticles(() => res.articles);
        setIsLoading(false);
      });
    }
  }, [query]);

  if (isLoading) return <Loading />;
  if (!isLoading && !articles) {
    return <NotFound />;
  }

  return (
    <>
      <HeaderArticles setTopic={setTopic} setQuery={setQuery} />

      <Page title="Articles">
        <Articles articles={articles} />
      </Page>
    </>
  );
};

export default ViewArticles;
