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
  const [username, setUsername] = useState("");
  const loggedInUser = "jessjelly";

  useEffect(() => {
    getArticlesById(article_id).then(res => {
      setArticle(() => res.article);
      //console.log(article);
      if (article) {
        getCommentsByArticleId(article_id).then(res => {
          setComments(() => res.comments);
        });
      }
    });
  }, []);

  const handleInput = event => {
    setUsername(() => event.target.value);
    console.log(username);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (username === loggedInUser) {
      setIsCreateComment(true);
    } else {
      setUsername("");
    }
  };
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <form onSubmit={handleSubmit}>
        <input value={username} placeholder="Enter Username" onChange={handleInput} autoFocus />
        <button>Write a comment</button>
      </form>
      <CreateComment isCreateComment={isCreateComment} setIsCreateComment={setIsCreateComment} article_id={article_id} username={username} />
      <Comments comments={comments} loggedInUser={loggedInUser} />
    </div>
  );
};

export default ViewSingleArticle;
