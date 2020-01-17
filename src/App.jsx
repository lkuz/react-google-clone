import React from "react";
import "./App.css";
import Navigation from "./pages/Navigation";
import Logo from "./pages/Logo";
import Form from "./pages/Form";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app-container">
        <Logo />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
