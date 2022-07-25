import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeerPage from "./pages/BeerPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
          <Route path="beer">
            <Route path=":id" element={<BeerPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
