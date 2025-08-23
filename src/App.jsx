// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skill";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   return <div>
//     <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
//     <Home darkMode={darkMode}/>
//     <About darkMode={darkMode} />
//     <Skills darkMode={darkMode}/>
//     <Projects darkMode={darkMode}/>
//     <Contact darkMode={darkMode}/>
//   </div>
// }

// export default App;

// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// App.jsx
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900" : "bg-gray-100 light-theme-fix"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
    </div>
  )
}
export default App;