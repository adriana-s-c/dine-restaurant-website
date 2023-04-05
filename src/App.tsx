import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, Footer, FormPage } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booktable" element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
