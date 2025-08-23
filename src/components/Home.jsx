// // Home.jsx
// // import profile from "../assets/profile.jpg";
// // Home.jsx
// import { FaGithub } from "react-icons/fa";


// const darkParentSection = "bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 text-white transition-colors duration-300"
// const lightParentSection = "bg-gradient-to-br from-blue-100 via-blue-200 to-purple-300 dark:from-gray-500 dark:via-gray-600 dark:to-gray-650 text-white transition-colors duration-300"

// const Home = ({ darkMode }) => {
//   const handleGithubClick = () => {
//     window.open("https://github.com/SuyashMehare", "_blank");
//   };

//   return (
//     <section
//       id="home"
//       className= {`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px- py-20 ${darkMode?  darkParentSection : lightParentSection}`}
//     >

//       {/* Photo Section */}
//       <div className="lg:w-1/2 flex justify-center">
//         <div className="relative">
//           <img
//             src="/profile.jpg"
//             alt="Profile"
//             className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/80 dark:border-gray-700/80 shadow-2xl transition-colors duration-300"
//           />
//           {/* Subtle glow effect */}
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//       {/* Text Section */}
//       <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-0 text-center lg:text-left">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Hi, I'm <span className="text-yellow-300 dark:text-yellow-400 transition-colors duration-300">Suyash Mehare</span>
//         </h1>
//         <p className="text-lg md:text-xl max-w-lg mb-8">
//           Passionate Full Stack Developer building modern web applications with
//           React, Node.js, Tailwind CSS, and more. I love creating intuitive and
//           responsive user experiences.
//         </p>
//         <button
//           onClick={handleGithubClick}
//           className="flex items-center cursor-pointer gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg"
//         >
//           <FaGithub className="text-xl "/>
//           View My GitHub
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Home;

// Home.jsx #2
// import { FaGithub } from "react-icons/fa";
// import { themeVariables } from "../styles";

// const Home = ({ darkMode }) => {
//   const handleGithubClick = () => {
//     window.open("https://github.com/SuyashMehare", "_blank");
//   };

//   return (
//     <section
//       id="Home"
//       className={`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 py-20 ${
//         darkMode ? themeVariables.darkHome : themeVariables.lightHome
//       } ${darkMode ? themeVariables.darkText : themeVariables.lightText}`}
//     >
//       {/* Photo Section */}
//       <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
//         <div className="relative">
//           <img
//             src="/profile.jpg"
//             alt="Profile"
//             className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/80 dark:border-gray-700/80 shadow-2xl transition-colors duration-300"
//           />
//           {/* Subtle glow effect */}
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
      
//       {/* Text Section */}
//       <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Hi, I'm <span className="text-yellow-300 dark:text-yellow-400 transition-colors duration-300">Suyash Mehare</span>
//         </h1>
//         <p className="text-lg md:text-xl max-w-lg mb-8">
//           Passionate Full Stack Developer building modern web applications with
//           React, Node.js, Tailwind CSS, and more. I love creating intuitive and
//           responsive user experiences.
//         </p>
//         <button
//           onClick={handleGithubClick}
//           className={`flex items-center cursor-pointer gap-2 backdrop-blur-sm border-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
//             darkMode 
//               ? "border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20" 
//               : "border-blue-300 hover:border-blue-500 bg-blue-100/50 hover:bg-blue-200/50"
//           }`}
//         >
//           <FaGithub className="text-xl"/>
//           View My GitHub
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Home;

// Home.jsx (revamped) #3
// import { FaGithub, FaArrowRight } from "react-icons/fa";
// import { themeVariables } from "../styles";

// const Home = ({ darkMode }) => {
//   const handleGithubClick = () => {
//     window.open("https://github.com/SuyashMehare", "_blank");
//   };

//   return (
//     <section
//       id="Home"
//       className={`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 py-16 transition-all duration-500 ${
//         darkMode ? themeVariables.darkHome : themeVariables.lightHome
//       }`}
//     >
//       {/* Text Section */}
//       <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-14 lg:mb-0 text-center lg:text-left">
//         <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
//           Full Stack Developer
//         </div>
        
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//           Hi, I'm <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Suyash Mehare</span>
//         </h1>
        
//         <p className={`text-lg md:text-xl max-w-lg mb-10 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//           Passionate Full Stack Developer building modern web applications with
//           React, Node.js, Tailwind CSS, and more. I love creating intuitive and
//           responsive user experiences.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4">
//           <button
//             onClick={handleGithubClick}
//             className={`flex items-center justify-center cursor-pointer gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${darkMode ? "bg-white/10 border border-white/20 hover:bg-white/20" : "bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}
//           >
//             <FaGithub className="text-xl"/>
//             View My GitHub
//             <FaArrowRight className="text-sm" />
//           </button>
          
//           <button
//             onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: 'smooth' })}
//             className={`flex items-center justify-center cursor-pointer gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${darkMode ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"}`}
//           >
//             View Projects
//             <FaArrowRight className="text-sm" />
//           </button>
//         </div>
//       </div>
      
//       {/* Photo Section */}
//       <div className="lg:w-1/2 flex justify-center relative">
//         <div className="relative">
//           <div className={`absolute -inset-4 rounded-3xl ${darkMode ? "bg-gradient-to-br from-blue-700/20 to-purple-700/20" : "bg-gradient-to-br from-blue-300/30 to-purple-300/30"} rotate-3 ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}></div>
          
//           <img
//             src="/profile.jpg"
//             alt="Profile"
//             className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/80 dark:border-gray-700/80 shadow-2xl transition-colors duration-300 relative z-10"
//           />
          
//           {/* Animated circles background */}
//           <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
//             <div className={`absolute top-12 left-12 w-24 h-24 rounded-full ${darkMode ? "bg-blue-700/20" : "bg-blue-300/30"} animate-pulse`}></div>
//             <div className={`absolute bottom-12 right-12 w-32 h-32 rounded-full ${darkMode ? "bg-purple-700/20" : "bg-purple-300/30"} animate-pulse delay-1000`}></div>
//             <div className={`absolute top-1/2 right-4 w-16 h-16 rounded-full ${darkMode ? "bg-amber-500/10" : "bg-amber-300/20"} animate-pulse delay-500`}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// Home.jsx (updated with z-index fix)
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { themeVariables } from "../styles";

const Home = ({ darkMode }) => {
  const handleGithubClick = () => {
    window.open("https://github.com/SuyashMehare", "_blank");
  };

  return (
    <section
      id="Home"
      className={`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 py-16 transition-all duration-500 ${
        darkMode ? themeVariables.darkHome : themeVariables.lightHome
      }`}
      style={{zIndex: 1}} // Added lower z-index for the home section
    >
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-14 lg:mb-0 text-center lg:text-left" style={{zIndex: 2}}>
        <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
          Full Stack Developer
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Suyash Mehare</span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-lg mb-10 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Passionate Full Stack Developer building modern web applications with
          React, Node.js, Tailwind CSS, and more. I love creating intuitive and
          responsive user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleGithubClick}
            className={`flex items-center justify-center cursor-pointer gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${darkMode ? "bg-white/10 border border-white/20 hover:bg-white/20" : "bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}
          >
            <FaGithub className="text-xl"/>
            View My GitHub
            <FaArrowRight className="text-sm" />
          </button>
          
          <button
            onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: 'smooth' })}
            className={`flex items-center justify-center cursor-pointer gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${darkMode ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"}`}
          >
            View Projects
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
      
      {/* Photo Section */}
      <div className="lg:w-1/2 flex justify-center relative" style={{zIndex: 1}}>
        <div className="relative">
          <div className={`absolute -inset-4 rounded-3xl ${darkMode ? "bg-gradient-to-br from-blue-700/20 to-purple-700/20" : "bg-gradient-to-br from-blue-300/30 to-purple-300/30"} rotate-3 ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}></div>
          
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white/80 dark:border-gray-700/80 shadow-2xl transition-colors duration-300 relative z-10"
          />
          
          {/* Animated circles background */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div className={`absolute top-12 left-12 w-24 h-24 rounded-full ${darkMode ? "bg-blue-700/20" : "bg-blue-300/30"} animate-pulse`}></div>
            <div className={`absolute bottom-12 right-12 w-32 h-32 rounded-full ${darkMode ? "bg-purple-700/20" : "bg-purple-300/30"} animate-pulse delay-1000`}></div>
            <div className={`absolute top-1/2 right-4 w-16 h-16 rounded-full ${darkMode ? "bg-amber-500/10" : "bg-amber-300/20"} animate-pulse delay-500`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;