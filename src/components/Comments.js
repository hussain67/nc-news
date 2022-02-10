import React, { useEffect } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";

const Comments = ({ comments, loggedInUser, setComments }) => {
  const handleDelete = (comment_id, article_id) => {
    deleteComment(comment_id).then(res => {
      if (res.status === 204) {
        getCommentsByArticleId(article_id).then(res => {
          setComments(res.comments);
        });
        //console.log("deleted");
      }
    });
  };
  return (
    <div>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <h3>
              Comment by: {comment.author}
              {loggedInUser == comment.author ? (
                <button
                  onClick={() => {
                    handleDelete(comment.comment_id, comment.article_id);
                  }}
                >
                  Delete comment
                </button>
              ) : (
                ""
              )}
            </h3>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
