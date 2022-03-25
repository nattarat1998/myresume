import './App.css';
import Navs from './Components/Navbar/Navbar';
import Introduce from './Components/Introduce/Introduce';
import AboutMe from './Components/AboutMe/AboutMe';
import Skill from './Components/Skill/Skill';
import Qualification from './Components/Qualification/Qualification';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navs />
        <Introduce />
        <hr width="100%" style={{ color: "rgb(24, 119, 242)"}} size="5" />
        <AboutMe />
        <hr width="100%" style={{ color: "rgb(24, 119, 242)"}} size="5" />
        <Skill />
        <hr width="100%" style={{ color: "rgb(24, 119, 242)"}} size="5" />
        <Qualification />
        <hr width="100%" style={{ color: "rgb(24, 119, 242)"}} size="5" />
        <Experience />
        <hr width="100%" style={{ color: "rgb(24, 119, 242)"}} size="5" />
        <Contact /><br/>
      </div>
    </div>
  );
}

export default App;
