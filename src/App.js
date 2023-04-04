import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import BeerPage from "./pages/BeerPage/BeerPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage/MainPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import FawPage from "./pages/FawPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test-on-react" element={<TitlePage />} />
        <Route path="/test-on-react/page/:current_page::per_page" element={<MainPage />} />
        <Route path="test-on-react/beers/:id" element={<BeerPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test-on-react/faworits" element={<FawPage/>}/>
      </Routes>
    </>
  );
}

export default App;
