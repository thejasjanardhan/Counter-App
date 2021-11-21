import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import "./Nav.css";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Nav = () => {
  const basketItems = useSelector(selectItems);

  return (
    <div className="nav__items">
      <div className="nav__item">Cart</div>

      <div className="nav__item">
        <p className="nav__item">Items</p>
        <div className="nav">
          <span className="span">{basketItems.length}</span>
          <ShoppingCartIcon style={{ height: "25", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
