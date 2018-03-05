var React = require("react");
var PropTypes = require("prop-types");

function PlayerPreview({ username, avatar, children }) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={avatar} alt={`Avatar for ${username}`} />
        <h2 className="username"> @{username}</h2>
      </div>
      {children}
      {/*This is whatever that you can find sandwiched in between the PlayerPreview "tags" in other components */}
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
