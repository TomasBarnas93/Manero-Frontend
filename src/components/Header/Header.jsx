import React, { useState, useEffect } from "react";
import Icon from "../misc/Icon";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const cartCount = localStorage.getItem("cartCount");
    setCartCount(cartCount);

    setCartCount(2);
  }, [cartCount]);

  return (
    <header className="p-3 lg:border-b">
      {/* Small Screen */}
      <div className="grid grid-cols-10">
        <Icon
          id="toggle-icon"
          button="col-start-1 col-span-1 text-xl w-10 lg:hidden"
          icon="fa-solid fa-bars fa-lg"
        />

        {/* Logo */}
        <NavLink
          to="/"
          className="col-start-5 col-span-2 text-xl lg:text-2xl text-center lg:text-left lg:col-start-1"
        >
          Manero
        </NavLink>

        <div className="col-start-4 col-span-4 max-lg:hidden justify-between flex">
          <NavLink to="/search">
            Search
          </NavLink>
          <NavLink to="/favorites">
            Favorites
          </NavLink>
          <NavLink to="/account">
            Account
          </NavLink>
          <NavLink to="/contacts">
            Contact Us
          </NavLink> 
        </div>

        {/* Shopping Cart */}
        <div className="col-start-10 col-span-1 text-center relative">
          <Icon
            to="shoppingCart"
            button="text-xl"
            icon="fa-regular fa-bag-shopping"
          ></Icon>
          <span
            className={
              cartCount === 0
                ? "hidden"
                : "absolute rounded-full bg-red-400 w-4 h-4 text-white text-sm leading-tight text-center"
            }
          >
            {cartCount}
          </span>
        </div>

        {/* Bottom menu, small screen */}
        <div className="fixed bottom-0 left-0 border-t w-full h-14 lg:hidden">
          <div className="grid grid-cols-5 py-3">
            <div className="col-start-1 col-span-1 text-center">
              <Icon to="/" button="text-xl" icon="fa-light fa-home-lg" />
            </div>

            <div className="col-start-2 col-span-1 text-center">
              <Icon to="search" button="text-xl w-8 h-8" icon="fa-light fa-search" />
            </div>

            <div className="col-start-3 col-span-1 text-center">
              <Icon to="shoppingCart" button="text-xl w-8 h-8" icon="fa-light fa-bag-shopping" />
            </div>

            <div className="col-start-4 col-span-1 text-center">
              <Icon to="favorites" button="text-xl w-8 h-8" icon="fa-light fa-heart" />
            </div>

            <div className="col-start-5 col-span-1 text-center">
              <Icon to="account" button="text-xl w-8 h-8" icon="fa-light fa-user" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
