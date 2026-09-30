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
              email="prathiksh981@gmail.com"
              phone="9741568031"
              address="Dharmasthala"
              course="B.Voc (Software and Application Development)"
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

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center px-4">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold">404</h1>
                <p className="mt-3 text-lg">Page not found</p>
                <a
                  href="/"
                  className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;