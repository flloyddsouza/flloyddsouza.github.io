import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Counter from "../src/components/Counter";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layouts/Layout";
// import './App.css';
//import "../styles/globals.css";
import "../src/styles/globals.css"

function App() {
  return (
    <div>
      
    <Layout>
      <Home />
      <About />
      
      {/* <Skills /> ToDo */}
      
      {/* <Portfolio /> Not Working */}
      
      {/* <Service /> ToDo */}
      <Resume />

      <Testimonial /> 

      {/* <Blog /> ToDo */} 
      <Counter />
      <Contact />   
    </Layout>
    </div>
   
  );
}

export default App;