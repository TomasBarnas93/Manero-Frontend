import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Account from "./views/Account";
import Details from "./views/Details";
import Onboarding from "./views/Onboarding";

const Body = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Onboarding" element={<Onboarding/>}/>
      </Routes>
    </main>
  );
};

export default Body;
