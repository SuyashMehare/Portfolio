// #1
// import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe } from 'react-icons/fa';

// const darkComponent = "bg-gray-900"
// const lightComponent = "bg-gray-50"

// const darkProjectName = "bg-gray-800"
// const lightProjectName = "bg-white"

// const projects = [
//   {
//     name: "Pharma Medico",
//     github: "https://github.com/SuyashMehare/pharmacy-frontend",
//     deployed: "https://pharmamedico.netlify.app/",
//     description:
//       "Pharmacy e-commerce solution where users can browse suggested medicines based on search history and medical reports. Users can place orders via a mocked payment gateway. Orders tracked by user and admin. Admin and users can access analytics. For tech stack & more details, check the README.",
//   },
//   {
//     name: "TaskMaster",
//     github: "https://github.com/SuyashMehare/TaskMaster-frontend",
//     deployed: "https://taskflow-deploy.netlify.app/",
//     description:
//       "A collaborative notes management tool where multiple teams can track daily/weekly/monthly tasks. Based on authorized levels, users can update/delete/view tasks. Project master can design task lifecycle and team follows it.",
//   },
//   {
//     name: "BabelUp - Learning Language Platform",
//     github: "https://github.com/SuyashMehare/Learning-Language-Platform--Education-",
//     deployed: "https://lovely-kheer-efe84f.netlify.app/",
//     description:
//       "Interactive platform to learn new languages via quizzes, exercises, and videos. Users can track progress based on personal goals and course completion.",
//   },
// ];

// const Projects = ({darkMode}) => {
//   return (
//     <section
//       id="projects"
//       className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 ${darkMode ? darkComponent : lightComponent}`}
//     >
//       <h2 className={`text-3xl font-bold mb-16  ${darkMode ? "text-white" : "text-gray-800"}`}>Projects</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {projects.map((project) => (
//           <div
//             key={project.name}
//             className={`flex flex-col ${darkMode ? darkProjectName : lightComponent}   rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group`}
//           >
//             {/* Project Header */}
//             <div className="p-6 pb-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                   {project.name}
//                 </h3>
//                 <FaCode className="text-blue-500 text-lg" />
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
//                 {project.description}
//               </p>
//             </div>
            
//             {/* Buttons */}
//             <div className="mt-auto p-6 pt-4 bg-gray-50 dark:bg-gray-750">
//               <div className="flex justify-between space-x-3">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 flex-1 group/github"
//                 >
//                   <FaGithub className="text-lg group-hover/github:scale-110 transition-transform" />
//                   <span className="text-sm">Code</span>
//                 </a>
//                 <a
//                   href={project.deployed}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex-1 group/demo"
//                 >
//                   <FaExternalLinkAlt className="text-sm group-hover/demo:scale-110 transition-transform" />
//                   <span className="text-sm">Live Demo</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// #2

// Projects.jsx
import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { themeVariables } from "../styles";

const projects = [
  {
    name: "Pharma Medico",
    github: "https://github.com/SuyashMehare/pharmacy-frontend",
    deployed: "https://pharmamedico.netlify.app/",
    description:
      "Pharmacy e-commerce solution where users can browse suggested medicines based on search history and medical reports. Users can place orders via a mocked payment gateway. Orders tracked by user and admin. Admin and users can access analytics. For tech stack & more details, check the README.",
    tags: ["React", "Node.js", "MongoDB", "E-commerce", "Analytics"]
  },
  {
    name: "TaskMaster",
    github: "https://github.com/SuyashMehare/TaskMaster-frontend",
    deployed: "https://taskflow-deploy.netlify.app/",
    description:
      "A collaborative notes management tool where multiple teams can track daily/weekly/monthly tasks. Based on authorized levels, users can update/delete/view tasks. Project master can design task lifecycle and team follows it.",
    tags: ["React", "Team Collaboration", "Task Management", "Authorization"]
  },
  {
    name: "BabelUp - Learning Language Platform",
    github: "https://github.com/SuyashMehare/Learning-Language-Platform--Education-",
    deployed: "https://lovely-kheer-efe84f.netlify.app/",
    description:
      "Interactive platform to learn new languages via quizzes, exercises, and videos. Users can track progress based on personal goals and course completion.",
    tags: ["Education", "Interactive Learning", "Progress Tracking", "Quizzes"]
  },
];

const Projects = ({darkMode}) => {
  return (
    <section
      id="Projects"
      className={`flex flex-col justify-center items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
    >
      <div className="text-center mb-16">
        <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
          My Work
        </div>
        
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Featured <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Projects</span>
        </h2>
        
        <p className={`max-w-lg mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Applications and solutions I've built with modern technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 group ${darkMode ? "bg-gray-800/50 border border-gray-700/30" : "bg-white border border-gray-200/70"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}
          >
            {/* Project Header with Gradient */}
            <div className={`p-5 pb-4 bg-gradient-to-r ${darkMode ? "from-blue-900/30 to-purple-900/30" : "from-blue-100/70 to-purple-100/70"} border-b ${darkMode ? "border-gray-700/30" : "border-gray-200/50"}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                  {project.name}
                </h3>
                <FaCode className={`text-lg ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700/50 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Description */}
            <div className="p-5 flex-grow">
              <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {project.description}
              </p>
            </div>
            
            {/* Buttons */}
            <div className={`p-5 pt-0 mt-auto ${darkMode ? "bg-gray-800/30" : "bg-gray-50/50"}`}>
              <div className="flex justify-between space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 flex-1 group/github ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
                >
                  <FaGithub className="text-lg group-hover/github:scale-110 transition-transform" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 flex-1 group/demo ${darkMode ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"}`}
                >
                  <FaExternalLinkAlt className="text-sm group-hover/demo:scale-110 transition-transform" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className={`mt-16 text-center p-6 rounded-2xl max-w-2xl ${darkMode ? "bg-gray-800/30 border border-gray-700/30" : "bg-white/70 border border-gray-200/50"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}>
        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Interested in working together?
        </h3>
        <p className={`mb-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          I'm always open to discussing new projects and opportunities.
        </p>
        <a 
          href="#Contact" 
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${darkMode ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"}`}
        >
          Let's Connect
          <FaArrowRight className="text-sm" />
        </a>
      </div>
    </section>
  );
};

export default Projects;