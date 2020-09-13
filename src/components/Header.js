import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <Link to="/pokemons/fight" className="item">
        Fight
      </Link>
    </div>
  );
};

export default Header;
