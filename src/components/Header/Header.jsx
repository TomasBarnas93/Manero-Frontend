import React, { useState, useEffect } from "react";
import Icon from "../misc/Icon";
import { NavLink } from "react-router-dom";
import BurgerButton from "../misc/BurgerButton";
import { useLocation } from "react-router-dom";

export const Header = () => {



  const [activePageMobile, setActivePageMobile] = useState("");
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setActivePageMobile(location.pathname);
  }, [location]);



  useEffect(() => {
    const cartCount = localStorage.getItem("cartCount");
    setCartCount(cartCount);

    setCartCount(2);
  }, [cartCount]);

  return (
    <header id="header" className="p-3 relative lg:border-b">
      {/* Small Screen */}
      <nav className="grid grid-cols-10">

        {/* Hamburger Menu */}
        <BurgerButton id="toggle-icon"/>

        {/* Logo */}
        <NavLink
          to="/"
          className="col-start-5 col-span-2 text-xl lg:text-2xl text-center lg:text-left lg:col-start-2"
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
        <div className="border-t h-14 bottom-menu lg:hidden">
          <div className="grid grid-cols-5 py-3">
            <div className={`col-start-1 col-span-1 text-center`}>
              <Icon to="/" button="text-xl" icon="fa-light fa-home-lg" />
            </div>

            <div className="col-start-2 col-span-1 text-center">
              <Icon to="/search" button="text-xl w-8 h-8" icon="fa-light fa-search" active={activePageMobile}/>
            </div>

            <div className="col-start-3 col-span-1 text-center">
              <Icon to="/shoppingCart" button="text-xl w-8 h-8" icon="fa-light fa-bag-shopping" active={activePageMobile}/>
            </div>

            <div className="col-start-4 col-span-1 text-center">
              <Icon to="/favorites" button="text-xl w-8 h-8" icon="fa-light fa-heart" active={activePageMobile} />
            </div>

            <div className="col-start-5 col-span-1 text-center">
              <Icon to="/account" button="text-xl w-8 h-8" icon="fa-light fa-user" active={activePageMobile}/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
