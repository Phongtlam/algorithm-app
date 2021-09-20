import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProblemsDisplay from "./components/ProblemDisplay";
import Topics from "./components/Topics";
import React from "react";
import FlexWrapper from "./components/FlexWrapper";

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/topics/:names">
              <FlexWrapper>
                <Topics />
                <ProblemsDisplay />
              </FlexWrapper>
            </Route>
            <Route path="/">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
