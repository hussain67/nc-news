import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById, getCommentsByArticleId } from "../utils/api";
import CreateComment from "./CreateComment";
import Comments from "./Comments";

const ViewSingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isCreateComment, setIsCreateComment] = useState(false);

  useEffect(() => {
    getArticlesById(article_id).then(res => {
      setArticle(() => res.article);
      console.log(article);
      if (article) {
        getCommentsByArticleId(article_id).then(res => {
          setComments(() => res.comments);
        });
      }
    });
  }, []);

  const handleClick = () => {
    setIsCreateComment(true);
  };
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <button onClick={() => handleClick()}>Write a comment</button>
      <CreateComment isCreateComment={isCreateComment} />

      <Comments comments={comments} />
    </div>
  );
};

export default ViewSingleArticle;
