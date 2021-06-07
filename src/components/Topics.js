import { Link, useHistory } from "react-router-dom";
import * as topicConstants from "../constants/topics";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Button from "./Button";

const topics = [
  topicConstants.slidingWindows,
  topicConstants.twoPointers,
  topicConstants.intervals,
  topicConstants.treeGeneral,
  topicConstants.treeTrie,
  topicConstants.subsetCombination,
  topicConstants.backtracking,
  topicConstants.binaryHeap,
  topicConstants.graph,
];

const Topics = () => {
  const [selectedTopics, setTopics] = useState({});

  const history = useHistory();

  useEffect(() => {
    const selectedTopicsNames = Object.keys(selectedTopics);

    if (selectedTopicsNames.length) {
      history.push(`/topics/${selectedTopicsNames.join("+")}`);
    } else {
      history.push("/home");
    }
  }, [selectedTopics, history]);

  const handleTopicSelect = (topic) => {
    const currentTopics = { ...selectedTopics };
    if (currentTopics[topic]) {
      delete currentTopics[topic];
    } else {
      currentTopics[topic] = true;
    }
    setTopics(currentTopics);
  };

  const currentTopics = Object.keys(selectedTopics);

  return (
    <>
      <ul>
        {topics.map((topic) => (
          <li key={`${topic}-selection`} className="margin-small">
            <Button
              onClick={() => handleTopicSelect(topic)}
              className={classnames({
                "selected-topic": selectedTopics[topic] === true,
              })}
            >
              {topic}
            </Button>
          </li>
        ))}
      </ul>
      <br />
      <header>Problems from the following topics:</header>
      <br />
      <ul>
        {currentTopics.map((topic) => {
          return (
            <li
              key={`${topic}-selection-removal`}
              className="inline margin-small"
            >
              <Button
                size="small"
                type="danger"
                className="pill-button"
                onClick={() => handleTopicSelect(topic)}
              >
                {topic} X
              </Button>
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
};

export default Topics;
