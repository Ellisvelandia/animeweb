import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AnimeItem from "./components/AnimeItem";
import Popular from "./components/Popular";
import { useGlobalContext } from "./context/Global";

const App = () => {
  const Global = useGlobalContext();
  console.log(Global);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
