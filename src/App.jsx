import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas, Tech } from "./components";
import Experience from "./components/Experience";
import EmbeddedApp from "./components/Diary";




const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <EmbeddedApp />
     
  


       
        <Tech />
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;