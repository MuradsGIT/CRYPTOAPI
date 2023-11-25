import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({search, setSearch}) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {" "}
        <FaCoins className="icon" />
        <h1 className="logo">
          Track <spam>Coin</spam>
        </h1>
      </div>

        <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
    </div>
  );
};

export default Navbar;
