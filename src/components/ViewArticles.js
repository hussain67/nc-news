import React, { useEffect, useState } from "react";
import { getArticles, getArticlesByQuery, getArticlesByTopic } from "../utils/api";
import Articles from "./Articles";
import Loading from "./Loading";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Page from "./Page";

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
    <Page title="Articles">
      <Nav setTopic={setTopic} setQuery={setQuery} />
      <Articles articles={articles} />
    </Page>
  );
};

export default ViewArticles;
