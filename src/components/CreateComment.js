import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";
import { FaWindowClose } from "react-icons/fa";
import "../styles/Create-comment.css";

const CreateComment = ({ isCreateComment, setIsCreateComment, article_id }) => {
  const [body, setBody] = useState();
  const [message, setMessage] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    if (body) {
      postComment(article_id, loggedInUser.username, body).then(res => {
        if (res.status === 201) {
          setIsCreateComment(false);
        }
      });
    } else {
      setMessage("Please enter your comment text");
    }
  };

  if (isCreateComment) {
    return (
      <>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={e => {
              setBody(e.target.value);
            }}
            className="create-comment__textarea"
            name="body"
            autoFocus
          />
          <div className="create-comment-buttons">
            <button className="btn btn__comment btn__submit">Submit Your Comment</button>
            <button onClick={() => setIsCreateComment(false)} className="btn btn__close">
              <FaWindowClose />
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return null;
  }
};

export default CreateComment;
