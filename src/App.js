import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from "./components/Nav";

// tailwind
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
