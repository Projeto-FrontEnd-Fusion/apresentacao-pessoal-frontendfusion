/* eslint-disable no-unused-vars */
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import './App.css'

const App = () => {

  return (
    <div className="App max-w-4xl mx-auto">
      <Header />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />

    </div>
  );
}

export default App
