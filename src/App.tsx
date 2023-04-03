import * as React from "react";
import "./App.css";
import { HomePage, Footer, FormPage } from "./components";

function App() {
  return (
    <div className="App">
      <FormPage />
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
