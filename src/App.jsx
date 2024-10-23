import React from "react";
import Heard from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projeto from "./pages/Projeto/Projeto";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Heard />
      <Home />
      <Projeto />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
