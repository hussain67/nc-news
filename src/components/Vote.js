import React, { useState } from "react";
import { countVote } from "../utils/api";

import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const Vote = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    setVoteCount(voteCount => voteCount + 1);
    setIsLiked(true);
    countVote(article_id, voteCount).then(res => {});
  };
  const handleDislikeClick = () => {
    setVoteCount(voteCount => voteCount - 1);
    setIsDisliked(true);
    countVote(article_id, voteCount).then(res => {});
  };
  return (
    <div>
      <button className={isLiked ? "btn btn-disabled" : "btn"} disabled={isLiked} onClick={() => handleLikeClick(1)}>
        <FaRegThumbsUp />
      </button>
      <span> ⭐️ {votes + voteCount} ⭐️</span>
      <button className={isDisliked ? "btn btn-disabled" : "btn"} disabled={isDisliked} onClick={() => handleDislikeClick(-1)}>
        <FaRegThumbsDown />
      </button>
    </div>
  );
};

export default Vote;
