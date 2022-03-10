import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";
import { FaWindowClose } from "react-icons/fa";
import "../styles/CreateComment.css";

const CreateComment = ({ isCreateComment, setIsCreateComment, article_id }) => {
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    if (body) {
      postComment(article_id, loggedInUser.username, body).then(res => {
        if (res.status === 201) {
          setBody("");
          setMessage("");
          setIsCreateComment(false);
        }
      });
    } else {
      setMessage("Please enter your comment text");
    }
  };
  const handleDelete = () => {
    setIsCreateComment(false);
    setBody("");
    setMessage("");
  };

  if (isCreateComment) {
    return (
      <div className="create-comment">
        <span className="create-comment__msg">{message}</span>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={e => {
              setBody(e.target.value);
            }}
            className="create-comment__textarea"
            name="body"
            autoFocus
            value={body}
          />
          <div className="create-comment__btn-container">
            <button className="btn btn__comment btn__submit">Submit Your Comment</button>
            <button onClick={handleDelete} className="btn btn__close">
              <FaWindowClose />
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default CreateComment;
