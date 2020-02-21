import React from "react";
import Header from "./header/Header";
import RouterPage from "./RouterPage";
import Footer from "./footer/Footer";
import "../css/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterPage />
      <Footer />
    </div>
  );
}
export default App;
