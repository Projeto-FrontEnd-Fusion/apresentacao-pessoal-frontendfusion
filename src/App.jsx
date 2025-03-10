import Header from "./assets/components/Header/page";
import MenuDevice from "./assets/components/Menu/page";
import Nav from "./Templates/Nav_bar_device/Nav_bar";
import Home from "./Templates/Home/page";
import Sobre from "./Templates/Sobre/page";
import Habilidades from "./Templates/Habilidades/page";
import Projetos from "./Templates/Projetos/page";
import Footer from "./Templates/Footer/page";
import TriangularParticles from './assets/components/Particles/Particles'

function App() {
  return (
    <>

      <TriangularParticles/>
        <Header/>
        <Nav/>
        <MenuDevice/>
        <Home />
        <Sobre/>
        <Habilidades/>
        <Projetos/>
        <Footer/>
   
    </>
  );
}

export default App;
