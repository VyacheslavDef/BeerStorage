import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BeerPage from "./pages/BeerPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import TitlePage from "./pages/TitlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test-on-react" element={<TitlePage />} />
        <Route path="/test-on-react/page/:current_page/:per_page" element={<MainPage />} />
        <Route path="test-on-react/beers/:id" element={<BeerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
