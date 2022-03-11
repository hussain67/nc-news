import React, { useState } from "react";
import { countVote } from "../utils/api";

import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const Vote = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  console.log(votes);

  const handleLikeClick = () => {
    //setVoteCount(voteCount => setVoteCount(voteCount + 1));
    countVote(article_id, 1).then(res => {
      if (res) {
        setVoteCount(voteCount + 1);
      }
    });

    setIsLiked(true);
  };
  const handleDislikeClick = () => {
    setVoteCount(voteCount => voteCount - 1);
    countVote(article_id, -1).then(res => {});
    setIsDisliked(true);
  };
  return (
    <div>
      <button className={isLiked ? "btn btn--disabled" : "btn"} disabled={isLiked} onClick={() => handleLikeClick(1)}>
        <FaRegThumbsUp />
      </button>
      <span> ⭐️ {voteCount} ⭐️</span>
      <button className={isDisliked ? "btn btn--disabled" : "btn"} disabled={isDisliked} onClick={() => handleDislikeClick(-1)}>
        <FaRegThumbsDown />
      </button>
    </div>
  );
};

export default Vote;
