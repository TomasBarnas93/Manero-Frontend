import React,{useState, useEffect} from "react";

export const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = localStorage.getItem("cartCount");
    setCartCount(cartCount);
  }, [cartCount]);


  return (
    <header className="border grid grid-cols-6 p-3">
      <div id="toggle-icon" className="col-start-1 col-span-1 text-center">
        <button className="text-xl" onClick={() => setHideMenu(!hideMenu)}>
          <i className="fa-solid fa-bars fa-lg"></i>
        </button>
      </div>

      <div className="col-start-3 col-span-2 text-center">Manero</div>

      <div className="col-start-6 col-span-1 text-center ">
        <button className="text-xl relative">
          <i class="fa-regular fa-bag-shopping "></i>
          <span class="absolute -left-3 bottom-1 rounded-full bg-red-600 w-4 h-4 text-white text-sm leading-tight text-center">
            2
          </span>
        </button>
      </div>
    </header>
  );
};
