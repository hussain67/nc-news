import React, { useEffect, useRef, useState } from "react";
import { getTopics } from "../utils/api";
import "../styles/Nav.css";

const Nav = props => {
  const [topics, setTopics] = useState([]);
  const [showTopics, setShowTopics] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const topicsContainerRef = useRef(null);
  const topicsRef = useRef(null);
  const sortContainerRef = useRef(null);
  const sortRef = useRef(null);

  const toggleShowTopics = () => {
    setShowTopics(!showTopics);
  };
  const toggleShowSort = () => {
    setShowSort(!showSort);
  };

  useEffect(() => {
    getTopics().then(res => {
      let arr = res.topics.map(topic => {
        return topic.slug;
      });
      setTopics(() => arr);
    });
  }, []);

  useEffect(() => {
    const topicsHeight = topicsRef.current.getBoundingClientRect().height;
    if (showTopics) {
      topicsContainerRef.current.style.height = `${topicsHeight}px`;
    } else {
      topicsContainerRef.current.style.height = "0px";
    }
  }, [showTopics]);

  useEffect(() => {
    const sortHeight = sortRef.current.getBoundingClientRect().height;
    if (showSort) {
      sortContainerRef.current.style.height = `${sortHeight}px`;
    } else {
      sortContainerRef.current.style.height = "0px";
    }
  }, [showSort]);

  function handleClickTopic(input) {
    props.setTopic(input);
  }
  return (
    <div className="nav">
      <div>
        <h3 className="nav__title" onClick={() => toggleShowTopics()}>
          Topics
        </h3>
        <div className="topics-container" ref={topicsContainerRef}>
          <ul className="topics-ul" ref={topicsRef}>
            {topics.map(topic => {
              return (
                <li
                  className="nav__li"
                  key={topic}
                  onClick={() => {
                    handleClickTopic(topic);
                    toggleShowTopics();
                  }}
                >
                  {topic}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="nav__title" onClick={() => toggleShowSort()}>
          Sort Articles{" "}
        </h3>
        <div className="sort-container" ref={sortContainerRef}>
          <ul className="sort-ul" ref={sortRef}>
            <li
              className="nav__li"
              key="votes"
              onClick={() => {
                props.setQuery("votes");
                toggleShowSort();
              }}
            >
              Votes
            </li>
            <li
              className="nav__li"
              key="created"
              onClick={() => {
                props.setQuery("created_at");
                toggleShowSort();
              }}
            >
              Date-Created
            </li>
            <li
              className="nav__li"
              key="commentCount"
              onClick={() => {
                props.setQuery("comment_count");
                toggleShowSort();
              }}
            >
              Comment-Count
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
