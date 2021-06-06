import { useParams } from "react-router-dom";
import topicsMap from "../data/topicsMap";
import { useState } from "react";

const ProblemsDisplay = () => {
  const { name, names } = useParams();
  let topics = {}

  if (names) {
    const topicNamesArray = names.split("+")

    for (let topicName of topicNamesArray) {
      topics = Object.assign(topicsMap[topicName], topics)
    }
  } else {
    topics = topicsMap[name];
  }

  const topicsName = Object.keys(topics);

  const [currentProblem, setProblem] = useState(null);

  const randomize = () => {
    return topicsName[Math.floor(Math.random() * topicsName.length)];
  };

  return (
    <>
      <header>{name || names}</header>
      <button onClick={() => setProblem(randomize())}>Randomize</button>
      <button onClick={() => setProblem(null)}>Show All</button>
      {!currentProblem ? (
        <ul>
          {topicsName.map((problemName) => {
            return (
              <li key={problemName}>
                <a href={topics[problemName]} target="_blank" rel="noreferrer">
                  {problemName}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <a href={topics[currentProblem]} target="_blank" rel="noreferrer">
          {currentProblem}
        </a>
      )}
    </>
  );
};

export default ProblemsDisplay;
