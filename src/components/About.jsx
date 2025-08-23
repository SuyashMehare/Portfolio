// #1
// const animation = "https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"

// const darkDescription = ""
// const darkComponent = "bg-gray-900 text-gray-200" 
// const lightComponent = "bg-gray-100" 

// const About = ({darkMode}) => {
//   return (
//     <section
//       id="about"
//       className= {`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-20 ${darkMode ? darkComponent : lightComponent}`}
//     >
//       {/* Animation Section */}
//       <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
//         <img
//           src={animation}
//           alt="Developer Animation"
//           className="w-120 h-120 object-contain opacity-95 shadow-md"
//         />
//       </div>

//       {/* About Text Section */}
//       <div className="lg:w-1/2 flex flex-col justify-center">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <p className="mb-4 max-w-lg text-lg">
//           I am a full-stack developer passionate about building web
//           applications that are modern, efficient, and user-friendly. My
//           experience includes React, Node.js, Express, MongoDB, Prisma, and
//           more.
//         </p>
//         <p className="max-w-lg text-lg">
//           I enjoy exploring new technologies, improving my skills, and solving
//           challenging problems to deliver high-quality solutions.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

// #2
// About.jsx
import { themeVariables } from "../styles";

const animation = "https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"

const About = ({darkMode}) => {
  return (
    <section
      id="About"
      className={`min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
    >
      {/* Animation Section */}
      <div className="lg:w-1/2 flex justify-center mb-14 lg:mb-0">
        <div className="relative">
          <img
            src={animation}
            alt="Developer Animation"
            className="w-80 h-80 md:w-96 md:h-96 object-contain opacity-95 rounded-2xl"
          />
          {/* Subtle glow effect */}
          <div className={`absolute -inset-4 rounded-3xl ${darkMode ? "bg-gradient-to-br from-blue-700/20 to-purple-700/20" : "bg-gradient-to-br from-blue-300/30 to-purple-300/30"} rotate-3 ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}></div>
        </div>
      </div>

      {/* About Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
          My Journey
        </div>
        
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-800"}`}>
          About <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Me</span>
        </h2>
        
        <div className={`p-6 rounded-2xl ${darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/70 backdrop-blur-sm"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow} max-w-lg`}>
          <p className={`mb-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            I am a full-stack developer passionate about building web
            applications that are modern, efficient, and user-friendly. My
            experience includes React, Node.js, Express, MongoDB, Prisma, and
            more.
          </p>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            I enjoy exploring new technologies, improving my skills, and solving
            challenging problems to deliver high-quality solutions.
          </p>
        </div>

        {/* Skills Highlights */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
          {["React", "Node.js", "Express", "MongoDB", "Prisma", "Tailwind"].map((skill) => (
            <span
              key={skill}
              className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? "bg-gray-800 text-blue-300 border border-blue-500/30" : "bg-blue-100 text-blue-700 border border-blue-300"}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
