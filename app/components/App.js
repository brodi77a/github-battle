var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch; //Instead of rendering all routes that are active
//it will render only one specific route
var Home = require("./Home");
var Battle = require("./Battle");
var Popular = require("./Popular");
var Nav = require("./Nav");
var Results = require("./Results");

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

module.exports = App;
