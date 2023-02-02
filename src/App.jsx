import React  from 'react'
import './App.css'
import { Link,  Route, Routes } from "react-router-dom"
import Home from './pages/home/home'
import Products from "./pages/products/nproducts"
import Contact from "./pages/contact/contact"
import Toutmrq from './constant/toutemarque'
function App() {
  return (  
    <>
    <nav>
        <Link to="/Home">Home</Link>
				<Link to="/Products">Products</Link>
				<Link to="/Contact">Contact</Link>
    </nav>
    <Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/contact" element={<Contact />} />
    </Routes>
      </>
  )}
export default App
