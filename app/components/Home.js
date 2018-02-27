var React = require("react");
var Link = require("react-router-dom").Link;

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>GITHUB BATTLE!</h1>

        <Link className="button" to="/battle"> {/*This will link us to the battle component*/}
          Battle
        </Link>
      </div>
    );
  }
}

module.exports = Home;
