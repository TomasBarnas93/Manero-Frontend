import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Account from "./views/Account";
import Details from "./views/Details";
import Tag from "./views/Tag"
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";
import Favorites from "./views/Favorites";
import Contact from "./views/Contact";
import CartItem from "./components/CartItem";
import ShoppingCart from "./views/ShoppingCart";
import CartIcon from "./components/CartIcon";


const Body = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/:tagName" element={<Tag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/cartItem" element={<CartItem />}/>
        <Route path="/cartIcon" element={<CartIcon />}/>
      </Routes>
    </main>
  );
};

export default Body;
