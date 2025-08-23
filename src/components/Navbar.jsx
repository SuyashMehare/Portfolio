// import { FaMoon, FaSun } from "react-icons/fa";

// const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
// const darkNavCss = "bg-gray-800 shadow-md z-50 text-white"
// const lightNavCss = "bg-gradient-to-br from-blue-100 via-blue-200 to-purple-300 dark:from-gray-500 dark:via-gray-600 dark:to-gray-650 text-white transition-colors duration-300"

// const darkNavItemsCss = null;


// function Navbar({ darkMode, setDarkMode }) {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return <nav className={`flex justify-between  ${darkMode ? darkNavCss : lightNavCss} px-35 py-5 text-lg shadow-xl `}>
//     <div className="font-bold text-2xl">Suyash Mehare</div>
//     <div>
//       <div className="flex justify-between gap-9">
//         {
//           navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="text-white-700 cursor-pointer hover:text-gray-400"
//             >
//               {item}
//             </button>
//           ))
//         }
//       <a
//         href="/resume.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         className=""
//         download
//       >
//         Resume
//       </a>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//         aria-label="Toggle theme"
//       >
//         {darkMode ? (
//           <FaSun className="text-yellow-400 text-xl" />
//         ) : (
//           <FaMoon className="text-gray-700 text-xl" />
//         )}
//       </button>
//       </div>
//     </div>
//   </nav>


// }

// export default Navbar;
// #2
// Navbar.jsx
// import { FaMoon, FaSun } from "react-icons/fa";
// import { themeVariables } from "../styles";

// const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

// function Navbar({ darkMode, setDarkMode }) {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`flex justify-between items-center px-8 py-5 text-lg shadow-xl sticky top-0 ${
//       darkMode ? themeVariables.darkNav : themeVariables.lightNav
//     } ${darkMode ? themeVariables.darkText : themeVariables.lightText}`}>
      
//       <div className="font-bold text-2xl">Suyash Mehare</div>
      
//       <div className="flex items-center gap-6">
//         {navItems.map((item) => (
//           <button
//             key={item}
//             onClick={() => scrollToSection(item)}
//             className={`cursor-pointer ${
//               darkMode ? themeVariables.darkNavItem : themeVariables.lightNavItem
//             }`}
//           >
//             {item}
//           </button>
//         ))}
        
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`px-3 py-1 rounded ${
//             darkMode ? themeVariables.darkButton : themeVariables.lightButton
//           }`}
//           download
//         >
//           Resume
//         </a>
        
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//           aria-label="Toggle theme"
//         >
//           {darkMode ? (
//             <FaSun className="text-yellow-400 text-xl" />
//           ) : (
//             <FaMoon className="text-gray-700 text-xl" />
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.jsx (updated with z-index fix)
import { FaMoon, FaSun, FaDownload } from "react-icons/fa";
import { themeVariables } from "../styles";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar({ darkMode, setDarkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`flex justify-between items-center px-6 md:px-12 py-4 text-lg sticky top-0 z-50 transition-all duration-300 ${
      darkMode ? themeVariables.darkNav : themeVariables.lightNav
    }`} style={{zIndex: 1000}}> {/* Added explicit z-index */}
      
      <div className={`font-bold text-2xl bg-gradient-to-r ${darkMode ? "from-blue-400 to-purple-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>
        Suyash Mehare
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden md:flex justify-between gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`transition-all duration-300 ${
                darkMode ? themeVariables.darkNavItem : themeVariables.lightNavItem
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        

        <a
          href="https://drive.google.com/file/d/1C19c-GmUWzXv4ebhgGqAPa7z2_wLhNim/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${darkMode ? themeVariables.darkResume : themeVariables.lightResume}`}
          onClick={(e) => {
            // Open the PDF in a new tab
            window.open("https://drive.google.com/file/d/1C19c-GmUWzXv4ebhgGqAPa7z2_wLhNim/view?usp=sharing", "_blank");

            // Trigger download in the background
            const downloadLink = document.createElement("a");
            downloadLink.href = "https://drive.google.com/uc?export=download&id=1C19c-GmUWzXv4ebhgGqAPa7z2_wLhNim";
            downloadLink.download = "Suyash_Mehare_Resume.pdf";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Prevent default link behavior
            e.preventDefault();
          }}
        >
  <FaDownload className="text-sm" />
  <span className="hidden sm:inline">Resume</span>
</a>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full transition-all duration-300 ${darkMode ? themeVariables.darkToggle : themeVariables.lightToggle}`}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;