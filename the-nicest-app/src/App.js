import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import SecretPage from "./SecretPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/secret-page" component={SecretPage} />
    </Switch>
  </Router>
);

export default App;
