import React, { useState, useEffect } from "react";
import Icon from "../misc/Icon";

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = localStorage.getItem("cartCount");
    setCartCount(cartCount);

    setCartCount(2);
  }, [cartCount]);

  return (
    <header className="border grid grid-cols-6 p-2">
      <Icon
        id="toggle-icon"
        button="col-start-1 col-span-1 text-xl lg:hidden w-10"
        icon="fa-solid fa-bars fa-lg"
      />

      <div className="col-start-3 col-span-2 text-xl text-center">Manero</div>

      <div className="col-start-6 col-span-1 text-center relative">
        <Icon to="/" button="text-xl" icon="fa-regular fa-bag-shopping"></Icon>
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

      <div className="fixed bottom-0 left-0 border w-full h-14 lg:hidden">
        <div className="grid grid-cols-5 py-3">
          <div className="col-start-1 col-span-1 text-center">
            <Icon button="text-xl" icon="fa-light fa-home-lg" />
          </div>

          <div className="col-start-2 col-span-1 text-center">
            <Icon button="text-xl w-8 h-8" icon="fa-light fa-search" />
          </div>

          <div className="col-start-3 col-span-1 text-center">
            <Icon button="text-xl w-8 h-8" icon="fa-light fa-heart" />
          </div>

          <div className="col-start-4 col-span-1 text-center">
            <Icon button="text-xl w-8 h-8" icon="fa-light fa-user" />
          </div>

          <div className="col-start-5 col-span-1 text-center">
            <Icon button="text-xl w-8 h-8" icon="fa-light fa-bag-shopping" />
          </div>
        </div>
      </div>
    </header>
  );
};
