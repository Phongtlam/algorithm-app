import { Link, useHistory } from "react-router-dom";
import * as topicConstants from "../constants/topics";
import {useEffect, useState} from "react";

const topics = [
  topicConstants.slidingWindows,
  topicConstants.twoPointers,
  topicConstants.intervals,
  topicConstants.treeBFS,
  topicConstants.treeDFS,
  topicConstants.treeBST,
  topicConstants.treeGeneral,
  topicConstants.treeTrie,
  topicConstants.subsetCombination,
  topicConstants.backtracking,
  topicConstants.binaryHeap,
  topicConstants.graph,
];

const Topics = () => {
  const [selectedTopics, setTopics] = useState([])

  const history = useHistory()

  useEffect(() => {
      history.push(`/groupTopics/${selectedTopics.join("+")}`)
  }, [selectedTopics, history])


  const onChange = (e) => {
    const currentTopics = [...selectedTopics]
    if (e.target.checked) {
      currentTopics.push(e.target.value)
    } else {
      const index = currentTopics.indexOf(e.target.value)
      currentTopics.splice(index, 1)
    }

    setTopics(currentTopics)
  }

  return (
    <>
      <form>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {topics.map((topic) => (
            <li key={topic}>
              <label>
                <Link to={`/topic/${topic}`}>{topic}</Link>
              </label>
              <input type="checkbox" value={topic} onChange={onChange} />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Topics
