import { useParams } from "react-router-dom";
import topicsMap from "../data/topicsMap";
import { useState } from "react";
import Button from "./Button";
import FlexWrapper from "./FlexWrapper";

const ProblemsDisplay = () => {
  const [currentProblem, setProblem] = useState(null);

  const { names } = useParams();

  let problemsMap = {};
  const topicNamesArray = names.split("+");

  for (let topicName of topicNamesArray) {
    problemsMap = {
      ...topicsMap[topicName],
      ...problemsMap,
    };
  }

  const problemNames = Object.keys(problemsMap);

  const randomize = () => {
    return problemNames[Math.floor(Math.random() * problemNames.length)];
  };

  return (
    <FlexWrapper
      size="50"
      direction="column"
      justifyContent="space-between"
      className="margin-top-small"
    >
      <FlexWrapper size="50" direction="column">
        <Button onClick={() => setProblem(randomize())}>Randomize</Button>
        <Button onClick={() => setProblem(null)}>Show All</Button>
      </FlexWrapper>
      <br />
      <div className="text-align-left">
        {currentProblem ? (
          <a
            href={problemsMap[currentProblem]}
            target="_blank"
            rel="noreferrer"
          >
            {currentProblem}
          </a>
        ) : (
          <ul>
            {problemNames.map((problemName) => {
              return (
                <li key={problemName}>
                  <a
                    href={problemsMap[problemName]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {problemName}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </FlexWrapper>
  );
};

export default ProblemsDisplay;
