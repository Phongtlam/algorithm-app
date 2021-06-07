import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProblemsDisplay from "./components/ProblemDisplay";
import Topics from "./components/Topics";
import React from "react";

const App = () => {
  console.log('public url', process.env.PUBLIC_URL)

  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL,
  // });

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Topics />
        <div>
          <Switch>
            <Route path="/topic/:name">
              <ProblemsDisplay />
            </Route>
            <Route path="/topics/:names">
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
