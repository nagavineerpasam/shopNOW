import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h2>
          <i className="fa fa-shopping-bag"></i> ShopNOW!
        </h2>
      </Link>
    </div>
  );
};
