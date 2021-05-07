import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Red from "../Red/Red";
import Yellow from "../Yellow/Yellow";
import Green from "../Green/Green";

import "./App.css";

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route history={history} path="/red" component={Red} />
          <Route history={history} path="/yellow" component={Yellow} />
          <Route history={history} path="/green" component={Green} />
          <Redirect from="/" to="/red" />
        </Switch>
      </div>
    );
  }
}

export default App;
