import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Switch: Instead of rendering all routes that are active
//it will render only one specific route
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Nav from "./Nav";
import Results from "./Results";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            {/*This is the same thing as the Home Component. Going forward /battle will               
               have suffixes so as to prevent the initial UI from being active and rendering at the same time
            */}
            <Route path="/battle/results/" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => <p>Not Found!</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
