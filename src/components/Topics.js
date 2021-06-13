import { useHistory, useLocation } from "react-router-dom";
import * as topicConstants from "../constants/topics";
import React from "react";
import classnames from "classnames";
import Button from "./Button";
import FlexWrapper from "./FlexWrapper";

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
  const history = useHistory();
  const location = useLocation();

  const currentTopics = location.pathname.split("/topics/")[1] || "";
  const currentTopicsArray = currentTopics.length
    ? currentTopics.split("+")
    : [];
  const currentTopicsSet = new Set(currentTopicsArray);

  const handleTopicSelect = (topic) => {
    if (currentTopicsSet.has(topic)) {
      currentTopicsSet.delete(topic);
    } else {
      currentTopicsSet.add(topic);
    }
    const pathName = Array.from(currentTopicsSet);
    if (pathName.length) {
      history.push(`/topics/${pathName.join("+")}`);
    } else {
      history.push("/");
    }
  };

  return (
    <FlexWrapper size="50" direction="column">
      <ul>
        {topics.map((topic) => (
          <li key={`${topic}-selection`} className="margin-small">
            <Button
              onClick={() => handleTopicSelect(topic)}
              className={classnames("width-100", {
                "selected-topic": currentTopicsSet.has(topic),
              })}
            >
              {topic}
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <header>Problems from the following topics:</header>
        <br />
        <ul>
          {currentTopicsArray.map((topic) => {
            return (
              <li
                key={`${topic}-selection-removal`}
                className="inline margin-small"
              >
                <Button
                  size="small"
                  type="danger"
                  className="pill-button margin-xSmall"
                  onClick={() => handleTopicSelect(topic)}
                >
                  {topic} X
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </FlexWrapper>
  );
};

export default Topics;
