import { BrowserRouter } from "react-router-dom";
import {
  StarsCanvas,
} from "../components";
import { Hero } from "../blocks/Hero";
import { About } from "../blocks/About";
import { Navbar } from "../widgets/Navbar";
import { Experience } from '../blocks/Experience';
import { Tech } from "../blocks/Tech";
import { Works } from "../blocks/Works";
import { Feedbacks } from "../blocks/Feedback";
import { Contact } from "../blocks/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
