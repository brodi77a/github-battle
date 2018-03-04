var React = require("react");
var PropTypes = require("prop-types");

function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img
          className="avatar"
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
        />
        <h2 className="username"> @{props.username}</h2>
      </div>
      {props.children} {/*This is whatever that you can find sandwiched in between the PlayerPreview "tags" in other components */}
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
