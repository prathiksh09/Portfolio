import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import State from "./Pages/State";
import Toggle from "./Pages/Toggle";
import InputField from "./Pages/InputField";
import Like from "./Pages/Like";
import Api from "./Pages/Api";
import Users from "./Pages/Users";
import Cart from "./Pages/Cart";
import Recipes from "./Pages/Recipes";
import Input from "./Pages/Input";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <About
              name="Prathiksh"
              email="prathiksh123@gmail.com"
              phone="9741568031"
              address="Dharmasthala"
              course="Computer Science"
              year="2026"
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/state" element={<State />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/input" element={<InputField />} />
        <Route path="/like" element={<Like />} />
        <Route path="/api" element={<Api />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/form" element={<Input />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;