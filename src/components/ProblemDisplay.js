import { useParams } from "react-router-dom";
import topicsMap from "../data/topicsMap";
import { useState } from "react";

const ProblemsDisplay = () => {
  const { name } = useParams();
  const problems = topicsMap[name];
  const problemNames = Object.keys(problems);

  const [currentProblem, setProblem] = useState(null);

  const randomize = () => {
    return problemNames[Math.floor(Math.random() * problemNames.length)];
  };

  return (
    <>
      <header>{name}</header>
      <button onClick={() => setProblem(randomize())}>Randomize</button>
      <button onClick={() => setProblem(null)}>Show All</button>
      {!currentProblem ? (
        <ul>
          {problemNames.map((problemName) => {
            return (
              <li key={problemName}>
                <a
                  href={problems[problemName]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {problemName}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <a href={problems[currentProblem]} target="_blank" rel="noreferrer">
          {currentProblem}
        </a>
      )}
    </>
  );
};

export default ProblemsDisplay;
