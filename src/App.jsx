import './App.css';
import Home from "./Home/home.jsx"
import About from './About/about.jsx'
import Skills from './Skills/skill.jsx';
import Project from './Project/project.jsx';
import Contact from './Contact/contact.jsx';
import NavBar from './NavBar.jsx';
function App() {
  return (
    <div className="App">
    <NavBar/>
      <section id="Home">
    <Home/>
      </section>
      <section id='About'>
        <About/>
      </section>
      <section id='Skill'>
        <Skills/>
        </section>
        <section id='Project'>
        <Project/>
        </section>
        <section id='Contact'>
        <Contact/>
        </section>
    </div>
  );
}

export default App;
