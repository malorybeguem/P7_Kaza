// IMPORTATIONS //
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Article from "../src/pages/article"
import Error from "./pages/error"
import About from "./pages/about"
// ROUTES //
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/article/*" element={<Article />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App