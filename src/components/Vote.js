import React, { useState, useEffect } from "react";

import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import { countVote } from "../utils/api";

const Vote = ({ id, votes, element }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    countVote(id, count, element).then(res => {
      if (res) {
      }
    });
  }, [id, count, element]);

  const handleLikeClick = () => {
    setVoteCount(voteCount + 1);
    setCount(1);
    setIsLiked(true);
  };
  const handleDislikeClick = () => {
    setVoteCount(voteCount => voteCount - 1);
    setCount(-1);
    setIsDisliked(true);
  };
  return (
    <div>
      <button className={isLiked ? "btn btn--disabled" : "btn"} disabled={isLiked} onClick={() => handleLikeClick(1)}>
        <FaRegThumbsUp />
      </button>
      <span>{voteCount} </span>
      <button className={isDisliked ? "btn btn--disabled" : "btn"} disabled={isDisliked} onClick={() => handleDislikeClick(-1)}>
        <FaRegThumbsDown />
      </button>
    </div>
  );
};

export default Vote;
