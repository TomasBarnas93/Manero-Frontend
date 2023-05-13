import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Account from "./views/Account"

const Body = () => {
  return (
    <main>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/search" element={<Home/>} />
            <Route path="/cart" element={<Home/>} />
            <Route path="/favorites" element={<Home/>} />
            <Route path="/account" element={<Account />} />
            <Route path="/contacts" element={<Home/>} />
        </Routes>
    </main>
  )
}

export default Body