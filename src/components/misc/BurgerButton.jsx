import React from "react";
import { useState, useEffect } from "react";

const BurgerButton = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint is 1024px
        setToggle(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className={`burger-menu col-start-1 col-span-1 lg:hidden ${
          toggle ? "" : "opened"
        } `}
        onClick={() => setToggle(!toggle)}
      >
        <svg width="2.5em" height="2.5rem" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <div className={`menu ${toggle ? "" : " slide-in"}`}>
        <div className="mt-16 pl-2">
          <div className="">Contact Us</div>
        </div>

        <div className="mt-4 pl-2 grid grid-col-4 border-b pb-3 border-black">
          <i className="fa-regular fa-location-pin flex col-start-1 col-span-1"></i>
            <div className="col-start-2 col-span-3">
                <div className="text-sm">Tomtebodavägen 3A</div>
                <div className="text-sm">171 65 Solna</div>
            </div>
        </div>
        <div className="mt-4 pl-2 grid grid-col-4 pb-3 border-b border-black">
          <i className="fa-regular fa-envelope flex col-start-1 col-span-1"></i>
            <div className="col-start-2 col-span-3">
                <div className="text-sm">info@manero.se</div>
            </div>
        </div>
        <div className="mt-4 pl-2 grid grid-col-4 pb-3 border-b border-black">
          <i className="fa-regular fa-phone flex col-start-1 col-span-1"></i>
            <div className="col-start-2 col-span-3">
                <div className="text-sm">+46-0736755933</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default BurgerButton;
