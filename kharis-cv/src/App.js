import Navbar from "./Components/Navbar/Navbar.js";
import Header from "./Components/Header/Header.js";
import About from "./Components/About/About.js";
import Quality from "./Components/Quality/Quality.js";
import Skill from "./Components/Skill/Skill.js";
import Services from "./Components/Services/Services.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Quality />
      <Skill />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
