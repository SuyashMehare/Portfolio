// #1
// import { useState } from "react";

// const lightComponent = "bg-white"
// const darkComponent = "bg-gray-900 min-h-[70vh]"


// const allSkills = {
//   frontend: ["React", "Tailwind", "HTML", "CSS", "Redux Toolkit"],
//   backend: [
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Prisma",
//     "PostgreSQL",
//     "MySQL",
//     "Firebase",
//     "Redis",
//     "Socket.IO",
//   ],
//   tools: ["GitHub", "Draw.io"],
// };

// const Skills = ({darkMode}) => {
//   const [category, setCategory] = useState("All");

//   const displaySkills =
//     category === "All"
//       ? [
//         ...allSkills.frontend.map(skill => ({ skill, type: "frontend" })),
//         ...allSkills.backend.map(skill => ({ skill, type: "backend" })),
//         ...allSkills.tools.map(skill => ({ skill, type: "tools" }))
//       ]
//       : allSkills[category.toLowerCase()].map(skill => ({ skill, type: category.toLowerCase() }));

//   // Color schemes for each category
//   const categoryColors = {
//     frontend: {
//       bgFrom: "from-blue-50",
//       bgTo: "to-blue-100",
//       darkBgFrom: "from-blue-900/20",
//       darkBgTo: "to-blue-800/30",
//       text: "text-blue-700",
//       darkText: "text-blue-300",
//       hoverText: "group-hover:text-blue-800",
//       darkHoverText: "dark:group-hover:text-blue-200",
//       shadow: "rgba(59, 130, 246, 0.15)",
//       glow: "from-blue-100/40",
//       darkGlow: "from-blue-900/20"
//     },
//     backend: {
//       bgFrom: "from-green-50",
//       bgTo: "to-green-100",
//       darkBgFrom: "from-green-900/20",
//       darkBgTo: "to-green-800/30",
//       text: "text-green-700",
//       darkText: "text-green-300",
//       hoverText: "group-hover:text-green-800",
//       darkHoverText: "dark:group-hover:text-green-200",
//       shadow: "rgba(16, 185, 129, 0.15)",
//       glow: "from-green-100/40",
//       darkGlow: "from-green-900/20"
//     },
//     tools: {
//       bgFrom: "from-purple-50",
//       bgTo: "to-purple-100",
//       darkBgFrom: "from-purple-900/20",
//       darkBgTo: "to-purple-800/30",
//       text: "text-purple-700",
//       darkText: "text-purple-300",
//       hoverText: "group-hover:text-purple-800",
//       darkHoverText: "dark:group-hover:text-purple-200",
//       shadow: "rgba(139, 92, 246, 0.15)",
//       glow: "from-purple-100/40",
//       darkGlow: "from-purple-900/20"
//     }
//   };

//   // Button colors for each category
//   const buttonColors = {
//     All: "bg-blue-600 shadow-blue-500/30",
//     Frontend: "bg-blue-600 shadow-blue-500/30",
//     Backend: "bg-green-600 shadow-green-500/30",
//     Tools: "bg-purple-600 shadow-purple-500/30"
//   };

//   return (
//     <section
//       id="skills"
//       className={`flex flex-col justify-start items-center px-6 py-16 ${darkMode ? darkComponent : lightComponent}`}
//     >
//       <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-black"}`}>Skills</h2>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-10">
//         {["All", "Frontend", "Backend", "Tools"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category === cat
//                 ? `${buttonColors[cat]} text-white shadow-lg`
//                 : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-md"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-6xl">
//         {displaySkills.map(({ skill, type }) => {
//           const colors = categoryColors[type];

//           return (
//             <div
//               key={skill}
//               className={`relative p-5 rounded-xl bg-gradient-to-b ${colors.bgFrom} ${colors.bgTo} dark:${colors.darkBgFrom} dark:${colors.darkBgTo} transform transition-all duration-300 hover:-translate-y-1.5 group`}
//               style={{
//                 boxShadow: `
//                   0 4px 6px -1px rgba(0, 0, 0, 0.05), 
//                   0 2px 4px -1px rgba(0, 0, 0, 0.03),
//                   inset 0 -2px 4px -1px rgba(0, 0, 0, 0.05),
//                   0 10px 15px -3px ${colors.shadow},
//                   0 4px 6px -2px rgba(0, 0, 0, 0.05)
//                 `
//               }}
//             >
//               {/* Top highlight to simulate light from above */}
//               <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-gray-600/50"></div>

//               <p className={`text-center font-semibold ${colors.text} dark:${colors.darkText} ${colors.hoverText} ${colors.darkHoverText} transition-colors duration-300`}>
//                 {skill}
//               </p>

//               {/* Subtle glow effect on hover */}
//               <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b ${colors.glow} to-transparent dark:${colors.darkGlow} pointer-events-none`}></div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// #2
// Skills.jsx
// import { useState } from "react";
// import { themeVariables } from "../styles";

// const allSkills = {
//   frontend: ["React", "Tailwind", "HTML", "CSS", "Redux Toolkit"],
//   backend: [
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Prisma",
//     "PostgreSQL",
//     "MySQL",
//     "Firebase",
//     "Redis",
//     "Socket.IO",
//   ],
//   tools: ["GitHub", "Draw.io"],
// };

// const Skills = ({darkMode}) => {
//   const [category, setCategory] = useState("All");

//   const displaySkills =
//     category === "All"
//       ? [
//         ...allSkills.frontend.map(skill => ({ skill, type: "frontend" })),
//         ...allSkills.backend.map(skill => ({ skill, type: "backend" })),
//         ...allSkills.tools.map(skill => ({ skill, type: "tools" }))
//       ]
//       : allSkills[category.toLowerCase()].map(skill => ({ skill, type: category.toLowerCase() }));

//   // Color schemes for each category
//   const categoryColors = {
//     frontend: {
//       bg: "bg-blue-100/70 dark:bg-blue-900/30",
//       border: "border-blue-300 dark:border-blue-700",
//       text: "text-blue-700 dark:text-blue-300",
//       hover: "hover:bg-blue-200/70 dark:hover:bg-blue-800/40",
//       icon: "💙"
//     },
//     backend: {
//       bg: "bg-green-100/70 dark:bg-green-900/30",
//       border: "border-green-300 dark:border-green-700",
//       text: "text-green-700 dark:text-green-300",
//       hover: "hover:bg-green-200/70 dark:hover:bg-green-800/40",
//       icon: "💚"
//     },
//     tools: {
//       bg: "bg-purple-100/70 dark:bg-purple-900/30",
//       border: "border-purple-300 dark:border-purple-700",
//       text: "text-purple-700 dark:text-purple-300",
//       hover: "hover:bg-purple-200/70 dark:hover:bg-purple-800/40",
//       icon: "💜"
//     }
//   };

//   // Button colors for each category
//   const buttonColors = {
//     All: {
//       active: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg",
//       inactive: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//     },
//     Frontend: {
//       active: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg",
//       inactive: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//     },
//     Backend: {
//       active: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg",
//       inactive: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//     },
//     Tools: {
//       active: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg",
//       inactive: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
//     }
//   };

//   return (
//     <section
//       id="Skills"
//       className={`flex flex-col justify-start items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
//     >
//       <div className="text-center mb-14">
//         <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
//           My Expertise
//         </div>
        
//         <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
//           Technical <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Skills</span>
//         </h2>
        
//         <p className={`max-w-lg mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//           Technologies and tools I use to bring ideas to life
//         </p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {["All", "Frontend", "Backend", "Tools"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category === cat
//                 ? buttonColors[cat].active
//                 : `${buttonColors[cat].inactive} hover:shadow-md`
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-6xl">
//         {displaySkills.map(({ skill, type }) => {
//           const colors = categoryColors[type];

//           return (
//             <div
//               key={skill}
//               className={`relative p-5 rounded-xl border ${colors.bg} ${colors.border} ${colors.hover} transform transition-all duration-300 hover:-translate-y-1.5 group cursor-default`}
//             >
//               {/* Skill icon/emoji */}
//               <div className="text-center text-2xl mb-2">
//                 {colors.icon}
//               </div>
              
//               {/* Skill name */}
//               <p className={`text-center font-semibold ${colors.text} transition-colors duration-300`}>
//                 {skill}
//               </p>

//               {/* Hover effect */}
//               <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/20 to-transparent dark:from-gray-600/20 pointer-events-none`}></div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Category labels for All view */}
//       {category === "All" && (
//         <div className="mt-10 flex flex-wrap justify-center gap-6">
//           {Object.entries(categoryColors).map(([type, colors]) => (
//             <div key={type} className="flex items-center">
//               <span className={`mr-2 ${colors.text}`}>●</span>
//               <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Skills;


//#3
// Skills.jsx
// import { useState } from "react";
// import { themeVariables } from "../styles";
// import { 
//   SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
//   SiExpress, SiMongodb, SiPostgresql, SiMysql, SiFirebase, 
//   SiRedis, SiSocketdotio, SiGithub, SiRedux, SiPrisma,
//   SiTailwindcss, SiPenpot
// } from "react-icons/si";

// const allSkills = {
//   frontend: ["React", "Tailwind", "HTML", "CSS", "Redux Toolkit"],
//   backend: [
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Prisma",
//     "PostgreSQL",
//     "MySQL",
//     "Firebase",
//     "Redis",
//     "Socket.IO",
//   ],
//   tools: ["GitHub", "Draw.io"],
// };

// // Icon mapping for each skill
// const skillIcons = {
//   "React": <SiReact />,
//   "Tailwind": <SiTailwindcss />,
//   "HTML": <SiHtml5 />,
//   "CSS": <SiCss3 />,
//   "Redux Toolkit": <SiRedux />,
//   "Node.js": <SiNodedotjs />,
//   "Express": <SiExpress />,
//   "MongoDB": <SiMongodb />,
//   "Prisma": <SiPrisma />,
//   "PostgreSQL": <SiPostgresql />,
//   "MySQL": <SiMysql />,
//   "Firebase": <SiFirebase />,
//   "Redis": <SiRedis />,
//   "Socket.IO": <SiSocketdotio />,
//   "GitHub": <SiGithub />,
//   "Draw.io": <SiPenpot />, // Using VS Code icon as proxy for Draw.io
// };

// const Skills = ({darkMode}) => {
//   const [category, setCategory] = useState("All");

//   const displaySkills =
//     category === "All"
//       ? [
//         ...allSkills.frontend.map(skill => ({ skill, type: "frontend" })),
//         ...allSkills.backend.map(skill => ({ skill, type: "backend" })),
//         ...allSkills.tools.map(skill => ({ skill, type: "tools" }))
//       ]
//       : allSkills[category.toLowerCase()].map(skill => ({ skill, type: category.toLowerCase() }));

//   // Color schemes for each category - IMPROVED FOR LIGHT MODE
//   // In your Skills.jsx, update the categoryColors to these values:
// // Color schemes for each category - FIXED FOR LIGHT MODE
// const categoryColors = {
//   frontend: {
//     bg: "bg-blue-100 dark:bg-blue-900/30", // Removed opacity for better contrast
//     border: "border-blue-300 dark:border-blue-700", // Darker border for light mode
//     text: "text-blue-800 dark:text-blue-300", // Darker text for light mode
//     hover: "hover:bg-blue-200 dark:hover:bg-blue-800/40",
//     iconColor: "text-blue-700 dark:text-blue-400" // Darker icon for light mode
//   },
//   backend: {
//     bg: "bg-green-100 dark:bg-green-900/30",
//     border: "border-green-300 dark:border-green-700",
//     text: "text-green-800 dark:text-green-300",
//     hover: "hover:bg-green-200 dark:hover:bg-green-800/40",
//     iconColor: "text-green-700 dark:text-green-400"
//   },
//   tools: {
//     bg: "bg-purple-100 dark:bg-purple-900/30",
//     border: "border-purple-300 dark:border-purple-700",
//     text: "text-purple-800 dark:text-purple-300",
//     hover: "hover:bg-purple-200 dark:hover:bg-purple-800/40",
//     iconColor: "text-purple-700 dark:text-purple-400"
//   }
// };

// // Also update the buttonColors for better light mode contrast:
// const buttonColors = {
//   All: {
//     active: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg",
//     inactive: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600" // Darker bg for light mode
//   },
//   Frontend: {
//     active: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg",
//     inactive: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//   },
//   Backend: {
//     active: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg",
//     inactive: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//   },
//   Tools: {
//     active: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg",
//     inactive: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//   }
// };
//   return (
//     <section
//       id="Skills"
//       className={`flex flex-col justify-start items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
//     >
//       <div className="text-center mb-14">
//         <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
//           My Expertise
//         </div>
        
//         <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
//           Technical <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Skills</span>
//         </h2>
        
//         <p className={`max-w-lg mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//           Technologies and tools I use to bring ideas to life
//         </p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {["All", "Frontend", "Backend", "Tools"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category === cat
//                 ? buttonColors[cat].active
//                 : `${buttonColors[cat].inactive} hover:shadow-md`
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-6xl">
//         {displaySkills.map(({ skill, type }) => {
//           const colors = categoryColors[type];

//           return (
//             <div
//               key={skill}
//               className={`relative p-5 rounded-xl border  ${colors.bg} ${colors.border} ${colors.hover}  transform transition-all duration-300 hover:-translate-y-1.5 group cursor-default`}
//             >
//               {/* Skill icon */}
//               <div className={`text-center text-3xl mb-3 ${colors.iconColor}`}>
//                 {skillIcons[skill] || <span>{colors.icon}</span>}
//               </div>
              
//               {/* Skill name - IMPROVED CONTRAST FOR LIGHT MODE */}
//               <p className={`text-center font-semibold ${colors.text} transition-colors duration-300`}>
//                 {skill}
//               </p>

//               {/* Hover effect */}
//               <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/20 to-transparent dark:from-gray-600/20 pointer-events-none`}></div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Category labels for All view */}
//       {category === "All" && (
//         <div className="mt-10 flex flex-wrap justify-center gap-6">
//           {Object.entries(categoryColors).map(([type, colors]) => (
//             <div key={type} className="flex items-center">
//               <span className={`mr-2 ${colors.iconColor}`}>●</span>
//               <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-900"}`}>
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Skills;


// #4

// Skills.jsx
import { useState } from "react";
import { themeVariables } from "../styles";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiFirebase, 
  SiRedis, SiSocketdotio, SiGithub, SiRedux, SiPrisma,
  SiTailwindcss
} from "react-icons/si";
import { FaPencilAlt } from "react-icons/fa";

const allSkills = {
  frontend: ["React", "Tailwind", "HTML", "CSS", "Redux Toolkit"],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Redis",
    "Socket.IO",
  ],
  tools: ["GitHub", "Draw.io"],
};

// Icon mapping for each skill
const skillIcons = {
  "React": <SiReact />,
  "Tailwind": <SiTailwindcss />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "Redux Toolkit": <SiRedux />,
  "Node.js": <SiNodedotjs />,
  "Express": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Prisma": <SiPrisma />,
  "PostgreSQL": <SiPostgresql />,
  "MySQL": <SiMysql />,
  "Firebase": <SiFirebase />,
  "Redis": <SiRedis />,
  "Socket.IO": <SiSocketdotio />,
  "GitHub": <SiGithub />,
  "Draw.io": <FaPencilAlt />,
};

const Skills = ({darkMode}) => {
  const [category, setCategory] = useState("All");

  const displaySkills =
    category === "All"
      ? [
        ...allSkills.frontend.map(skill => ({ skill, type: "frontend" })),
        ...allSkills.backend.map(skill => ({ skill, type: "backend" })),
        ...allSkills.tools.map(skill => ({ skill, type: "tools" }))
      ]
      : allSkills[category.toLowerCase()].map(skill => ({ skill, type: category.toLowerCase() }));

  // Color schemes for each category - ENHANCED FOR LIGHT THEME VISIBILITY
  const categoryColors = {
    frontend: {
      bg: darkMode ? "bg-blue-900/30" : "bg-blue-100",
      border: darkMode ? "border-blue-700" : "border-blue-300",
      text: darkMode ? "text-blue-300" : "text-blue-800",
      hover: darkMode ? "hover:bg-blue-800/40" : "hover:bg-blue-200",
      iconColor: darkMode ? "text-blue-400" : "text-blue-700",
      cardStyle: darkMode ? "" : "shadow-md" // Added shadow for light mode
    },
    backend: {
      bg: darkMode ? "bg-green-900/30" : "bg-green-100",
      border: darkMode ? "border-green-700" : "border-green-300",
      text: darkMode ? "text-green-300" : "text-green-800",
      hover: darkMode ? "hover:bg-green-800/40" : "hover:bg-green-200",
      iconColor: darkMode ? "text-green-400" : "text-green-700",
      cardStyle: darkMode ? "" : "shadow-md"
    },
    tools: {
      bg: darkMode ? "bg-purple-900/30" : "bg-purple-100",
      border: darkMode ? "border-purple-700" : "border-purple-300",
      text: darkMode ? "text-purple-300" : "text-purple-800",
      hover: darkMode ? "hover:bg-purple-800/40" : "hover:bg-purple-200",
      iconColor: darkMode ? "text-purple-400" : "text-purple-700",
      cardStyle: darkMode ? "" : "shadow-md"
    }
  };

  // Button colors for each category - ENHANCED FOR LIGHT THEME
  const buttonColors = {
    All: {
      active: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg",
      inactive: darkMode 
        ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
    },
    Frontend: {
      active: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg",
      inactive: darkMode 
        ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
    },
    Backend: {
      active: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg",
      inactive: darkMode 
        ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
    },
    Tools: {
      active: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg",
      inactive: darkMode 
        ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
    }
  };

  return (
    <section
      id="Skills"
      className={`flex flex-col justify-start items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
    >
      <div className="text-center mb-14">
        <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200 text-blue-800"}`}>
          My Expertise
        </div>
        
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Technical <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Skills</span>
        </h2>
        
        <p className={`max-w-lg mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {["All", "Frontend", "Backend", "Tools"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${category === cat
                ? buttonColors[cat].active
                : `${buttonColors[cat].inactive}`
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-6xl">
        {displaySkills.map(({ skill, type }) => {
          const colors = categoryColors[type];

          return (
            <div
              key={skill}
              className={`relative p-5 rounded-xl border ${colors.bg} ${colors.border} ${colors.hover} ${colors.cardStyle} transform transition-all duration-300 hover:-translate-y-1.5 group cursor-default`}
            >
              {/* Skill icon */}
              <div className={`text-center text-3xl mb-3 ${colors.iconColor}`}>
                {skillIcons[skill]}
              </div>
              
              {/* Skill name - BOLD TEXT FOR BETTER VISIBILITY */}
              <p className={`text-center font-bold ${colors.text} transition-colors duration-300`}>
                {skill}
              </p>

              {/* Hover effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/20 to-transparent dark:from-gray-600/20 pointer-events-none`}></div>
            </div>
          );
        })}
      </div>

      {/* Category labels for All view */}
      {category === "All" && (
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {Object.entries(categoryColors).map(([type, colors]) => (
            <div key={type} className="flex items-center">
              <span className={`mr-2 ${colors.iconColor}`}>●</span>
              <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;