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

const ViewSingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isCreateComment, setIsCreateComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loggedInUser = "jessjelly";

  const handleClick = () => {
    setIsCreateComment(true);
  };

  useEffect(() => {
    getArticlesById(article_id)
      .then(res => {
        setArticle(() => res.article);
        if (article) {
          getCommentsByArticleId(article_id).then(res => {
            setComments(() => res.comments);
          });
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && !article) {
    return <NotFound />;
  }
  return (
    <Page title="Article & Comments">
      <div className="article">
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <div className="article__comment-vote">
          <button onClick={() => handleClick()}>Write a comment</button>
          <Vote votes={article.votes} article_id={article_id} />
        </div>
        <CreateComment isCreateComment={isCreateComment} setIsCreateComment={setIsCreateComment} article_id={article_id} username={loggedInUser} />
        <Comments comments={comments} loggedInUser={loggedInUser} setComments={setComments} />
      </div>
    </Page>
  );
};

export default ViewSingleArticle;
