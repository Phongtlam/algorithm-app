import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProblemsDisplay from "./components/ProblemDisplay";
import Topics from "./components/Topics";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Topics />
        <div>
          <Switch>
            <Route path="/topic/:name">
              <ProblemsDisplay />
            </Route>
            <Route path="/groupTopics/:names">
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
  return <h2>Welcome</h2>;
}

export default App;
