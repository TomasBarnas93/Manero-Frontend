import { Routes, Route } from "react-router-dom"

const Body = () => {
  return (
    <main>
        <Routes>
            <Route exact path="/" element={<h1>Home</h1>} />
        </Routes>
    </main>
  )
}

export default Body