import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById, getCommentsByArticleId } from "../utils/api";

import CreateComment from "./CreateComment";
import Comments from "./Comments";
import Vote from "./Vote";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Page from "./Page";
import "../styles/ViewSingleArticle.css";
import HeaderArticle from "./HeaderArticle";
import ArticleAuthor from "./ArticleAuthor";

const ViewSingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  const [comments, setComments] = useState([]);
  const [isCreateComment, setIsCreateComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { author, created_at, title, votes } = article;

  const handleClick = () => {
    setIsCreateComment(true);
  };

  useEffect(() => {
    getArticlesById(article_id)
      .then(res => {
        setArticle(() => res.article);

        if (res.article) {
          getCommentsByArticleId(article_id).then(res => {
            setComments(() => res.comments);
          });
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && !article) {
    return <NotFound />;
  }
  return (
    <>
      <HeaderArticle />

      <Page title="Article & Comments">
        <div className="article">
          <h3 className="articles__title">{title}</h3>
          <ArticleAuthor author={author} created_at={created_at} />

          <p>{article.body}</p>
          <div className="article__comment-vote">
            <button className="btn btn__comment" onClick={() => handleClick()}>
              Write a comment
            </button>
            <Vote votes={votes} id={article_id} element="article" />
          </div>
          <CreateComment isCreateComment={isCreateComment} setIsCreateComment={setIsCreateComment} article_id={article_id} setComments={setComments} />
          <Comments comments={comments} setComments={setComments} />
        </div>
      </Page>
    </>
  );
};

export default ViewSingleArticle;
