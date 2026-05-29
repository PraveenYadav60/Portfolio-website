// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import Home from "./MyComponent/Home";
import Education from "./MyComponent/Education";
import Skills from "./MyComponent/Skills";
import Projects from "./MyComponent/Projects";
import Footer from "./MyComponent/Footer";
import Services from "./MyComponent/Services";
// import Skill from "./MyComponent/Skill";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Education />
      <Skills />
      <Services />
      <Projects />
      {/* <Skill /> */}
      <Footer />
      
    </div>
  );
};

export default App;




// function App() {
//   return (
//    <>
   
//    <About />
//    <Education />
//    <Footer />
//    <Header/>
//    <Home/>

//    </>
//   );
// }

// export default App;
