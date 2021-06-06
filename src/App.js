import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as topicConstants from "./constants/topics";
import ProblemsDisplay from "./components/ProblemDisplay";

const App = () => {
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
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {topics.map((topic) => (
                <li key={topic}>
                  <Link to={`/problem/${topic}`}>{topic}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route path="/problem/:name">
              <ProblemsDisplay />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

export default App;
