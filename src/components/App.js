import React from "react";
import Header from "./header/Header";
import RouterPage from "./RouterPage";
import Footer from "./footer/Footer";
import { Switch, Route } from "react-router-dom";
import "../css/App.scss";

function App() {
  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}
export default App;
