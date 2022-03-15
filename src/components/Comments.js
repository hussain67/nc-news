import React, { useContext } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
import "../styles/Comment.css";
import { UserContext } from "../contexts/User";
import { FaTrash } from "react-icons/fa";
import Vote from "./Vote";
const Comments = ({ comments, setComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const handleDelete = (comment_id, article_id) => {
    deleteComment(comment_id).then(res => {
      if (res.status === 204) {
        getCommentsByArticleId(article_id).then(res => {
          setComments(res.comments);
        });
      }
    });
  };

  return (
    <div>
      {comments.map(comment => {
        const { comment_id, author, article_id, votes } = comment;
        return (
          <li key={comment_id}>
            <h4 className="comment__author">
              Comment By: {author}
              {loggedInUser.username === author ? (
                <button
                  className="btn btn--delete"
                  onClick={() => {
                    handleDelete(comment_id, article_id);
                  }}
                >
                  <FaTrash />
                </button>
              ) : (
                ""
              )}
            </h4>
            <p>{comment.body}</p>
            <Vote id={comment_id} votes={votes} element="comment" />
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
