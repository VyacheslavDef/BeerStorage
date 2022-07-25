import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import BeerPage from "./pages/BeerPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
          <Route path="beer">
            <Route path=":id" element={<BeerPage/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
