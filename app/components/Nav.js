var React = require("react");
var NavLink = require("react-router-dom").NavLink; 
//dynamically change the style of the anchor
//tag based on if the route is active.
//NavLink incorporates Link as well but
//with other properties attached to it. If you
//just want to render an anchor tag then you can
//use Link

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      {/*This brings us to the route that ends with '/'. We use exact in this case to
         distinguish between the '/' and the other routes. Without it, if we are on different 
         routes, the home link will also be active BECAUSE of the '/'. The Home link will now only
         be activated when the route is at exactly '/'
       */}
      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

module.exports = Nav;
