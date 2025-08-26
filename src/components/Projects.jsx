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

// import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe, FaArrowRight } from 'react-icons/fa';
// import { themeVariables } from "../styles";

// const projects = [
//   {
//     name: "Pharma Medico",
//     github: "https://github.com/SuyashMehare/pharmacy-frontend",
//     deployed: "https://pharmamedico.netlify.app/",
//     description:
//       "Pharmacy e-commerce solution where users can browse suggested medicines based on search history and medical reports. Users can place orders via a mocked payment gateway. Orders tracked by user and admin. Admin and users can access analytics. For tech stack & more details, check the README.",
//     tags: ["React", "Node.js", "MongoDB", "E-commerce", "Analytics"]
//   },
//   {
//     name: "TaskMaster",
//     github: "https://github.com/SuyashMehare/TaskMaster-frontend",
//     deployed: "https://taskflow-deploy.netlify.app/",
//     description:
//       "A collaborative notes management tool where multiple teams can track daily/weekly/monthly tasks. Based on authorized levels, users can update/delete/view tasks. Project master can design task lifecycle and team follows it.",
//     tags: ["React", "Team Collaboration", "Task Management", "Authorization"]
//   },
//   {
//     name: "BabelUp - Learning Language Platform",
//     github: "https://github.com/SuyashMehare/Learning-Language-Platform--Education-",
//     deployed: "https://lovely-kheer-efe84f.netlify.app/",
//     description:
//       "Interactive platform to learn new languages via quizzes, exercises, and videos. Users can track progress based on personal goals and course completion.",
//     tags: ["Education", "Interactive Learning", "Progress Tracking", "Quizzes"]
//   },
// ];

// const Projects = ({darkMode}) => {
//   return (
//     <section
//       id="Projects"
//       className={`flex flex-col justify-center items-center px-6 lg:px-20 py-20 transition-all duration-500 ${darkMode ? themeVariables.darkSection : themeVariables.lightSection}`}
//     >
//       <div className="text-center mb-16">
//         <div className={`text-sm font-medium px-4 py-1 rounded-full mb-6 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-200/70 text-blue-700"}`}>
//           My Work
//         </div>
        
//         <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
//           Featured <span className={`bg-gradient-to-r ${darkMode ? "from-amber-300 to-amber-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}>Projects</span>
//         </h2>
        
//         <p className={`max-w-lg mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//           Applications and solutions I've built with modern technologies
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {projects.map((project) => (
//           <div
//             key={project.name}
//             className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 group ${darkMode ? "bg-gray-800/50 border border-gray-700/30" : "bg-white border border-gray-200/70"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}
//           >
//             {/* Project Header with Gradient */}
//             <div className={`p-5 pb-4 bg-gradient-to-r ${darkMode ? "from-blue-900/30 to-purple-900/30" : "from-blue-100/70 to-purple-100/70"} border-b ${darkMode ? "border-gray-700/30" : "border-gray-200/50"}`}>
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
//                   {project.name}
//                 </h3>
//                 <FaCode className={`text-lg ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
//               </div>
              
//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {project.tags.map((tag, index) => (
//                   <span 
//                     key={index}
//                     className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700/50 text-gray-300" : "bg-gray-100 text-gray-700"}`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             {/* Project Description */}
//             <div className="p-5 flex-grow">
//               <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 {project.description}
//               </p>
//             </div>
            
//             {/* Buttons */}
//             <div className={`p-5 pt-0 mt-auto ${darkMode ? "bg-gray-800/30" : "bg-gray-50/50"}`}>
//               <div className="flex justify-between space-x-3">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 flex-1 group/github ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
//                 >
//                   <FaGithub className="text-lg group-hover/github:scale-110 transition-transform" />
//                   <span className="text-sm">Code</span>
//                 </a>
//                 <a
//                   href={project.deployed}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 flex-1 group/demo ${darkMode ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"}`}
//                 >
//                   <FaExternalLinkAlt className="text-sm group-hover/demo:scale-110 transition-transform" />
//                   <span className="text-sm">Demo</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div className={`mt-16 text-center p-6 rounded-2xl max-w-2xl ${darkMode ? "bg-gray-800/30 border border-gray-700/30" : "bg-white/70 border border-gray-200/50"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}>
//         <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
//           Interested in working together?
//         </h3>
//         <p className={`mb-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//           I'm always open to discussing new projects and opportunities.
//         </p>
//         <a 
//           href="#Contact" 
//           className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${darkMode ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"}`}
//         >
//           Let's Connect
//           <FaArrowRight className="text-sm" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// #3
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { themeVariables } from "../styles";

// Sample project data with images and labels
const projects = [
  {
    name: "Pharma Medico",
    github: "https://github.com/SuyashMehare/pharmacy-frontend",
    deployed: "https://pharmamedico.netlify.app/",
    description: "Pharmacy e-commerce solution where users can browse suggested medicines based on search history and medical reports. Users can place orders via a mocked payment gateway. Orders tracked by user and admin. Admin and users can access analytics. For tech stack & more details, check the README.",
    tags: ["React", "Node.js", "MongoDB", "E-commerce", "Analytics"],
    images: {
      "Individuals": [
        { src: "/project/pharmacy/individuals/AllProducts.png", label: "All Products" },
        { src: "/project/pharmacy/individuals/BankDetails.png", label: "Bank Details" },
        { src: "/project/pharmacy/individuals/Checkout.png", label: "Checkout" },
        { src: "/project/pharmacy/individuals/OrderDetail.png", label: "Order Details" },
        { src: "/project/pharmacy/individuals/OrderHistory.png", label: "Order History" },
        { src: "/project/pharmacy/individuals/ProductCart.png", label: "Product Cart" },
        { src: "/project/pharmacy/individuals/Admin-OrderPannel.png", label: "Admin-OrderPannel" },
      ],
      "Flow-Make Order": [
      ],
    }
  },
  {
    name: "TaskMaster",
    github: "https://github.com/SuyashMehare/TaskMaster-frontend",
    deployed: "https://taskflow-deploy.netlify.app/",
    description: "A collaborative notes management tool where multiple teams can track daily/weekly/monthly tasks. Based on authorized levels, users can update/delete/view tasks. Project master can design task lifecycle and team follows it.",
    tags: ["React", "Team Collaboration", "Task Management", "Authorization"],
    images: {
      "Dashboard": [
        { src: "/project/taskmaster/Kanban1.png", label: "Notes board" },
      ],
      "Task Management": [
      ]
    }
  },
  {
    name: "BabelUp - Learning Language Platform",
    github: "https://github.com/SuyashMehare/Learning-Language-Platform--Education-",
    deployed: "https://lovely-kheer-efe84f.netlify.app/",
    description: "Interactive platform to learn new languages via quizzes, exercises, and videos. Users can track progress based on personal goals and course completion.",
    tags: ["Education", "Interactive Learning", "Progress Tracking", "Quizzes"],
    images: {
      "Individuals": [
        { src: "/project/learningLangPlatform/Quizz.png", label: "Quizz" },
        { src: "/project/learningLangPlatform/SignUp.png", label: "Sign up- multi option" },
        { src: "/project/learningLangPlatform/UserProgress.png", label: "User Progress V0" }
      ],
      "Learning": [
      ],
      "Progress": [
      ]
    }
  },
];

// New ProjectGallery component
const ProjectGallery = ({ project, darkMode, isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(project.images)[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = Object.keys(project.images);
  const currentImages = project.images[activeCategory] || [];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`relative rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] ${darkMode ? "bg-gray-800" : "bg-white"} shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            {project.name} - Project Gallery
          </h3>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-200 text-gray-600"}`}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row h-[70vh]">
          {/* Left Section - Categories */}
          <div className={`w-full md:w-1/4 border-r ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"} overflow-y-auto`}>
            <div className="p-4">
              <h4 className={`font-medium mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentImageIndex(0);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category 
                        ? darkMode 
                          ? "bg-blue-900/30 text-blue-300" 
                          : "bg-blue-100 text-blue-700"
                        : darkMode 
                          ? "text-gray-400 hover:bg-gray-800" 
                          : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Section - Images */}
          <div className="w-full md:w-3/4 relative flex flex-col items-center justify-center p-4">
            {currentImages.length > 0 ? (
              <>
                <div className="relative flex-grow w-full flex items-center justify-center mb-4">
                  <img 
                    src={currentImages[currentImageIndex].src} 
                    alt={currentImages[currentImageIndex].label}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                  
                  {/* Navigation Arrows */}
                  {currentImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg ${darkMode ? "bg-gray-800/80 hover:bg-gray-700 text-white" : "bg-white/80 hover:bg-white text-gray-800"}`}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={nextImage}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg ${darkMode ? "bg-gray-800/80 hover:bg-gray-700 text-white" : "bg-white/80 hover:bg-white text-gray-800"}`}
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-800/80 text-gray-200" : "bg-white/80 text-gray-700"}`}>
                    {currentImageIndex + 1} / {currentImages.length}
                  </div>
                </div>
                
                {/* Image Label */}
                <div className={`w-full text-center p-3 rounded-lg ${darkMode ? "bg-gray-700/50 text-gray-200" : "bg-gray-100 text-gray-700"}`}>
                  <p className="font-medium">{currentImages[currentImageIndex].label}</p>
                </div>
                
                {/* Thumbnail Navigation */}
                {currentImages.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {currentImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? darkMode 
                              ? "border-blue-400" 
                              : "border-blue-500"
                            : darkMode 
                              ? "border-gray-600 opacity-60 hover:opacity-100" 
                              : "border-gray-300 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img 
                          src={img.src} 
                          alt={img.label}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className={`text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                No images available for this category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Projects component with image preview functionality
const Projects = ({darkMode}) => {
  const [activeProject, setActiveProject] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [previewIndices, setPreviewIndices] = useState({});

  // Initialize preview indices
  useEffect(() => {
    const indices = {};
    projects.forEach(project => {
      if (project.images) {
        const firstCategory = Object.keys(project.images)[0];
        indices[project.name] = 0;
      }
    });
    setPreviewIndices(indices);
  }, []);

  // Function to rotate through preview images
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndices = {...previewIndices};
      Object.keys(newIndices).forEach(projectName => {
        const project = projects.find(p => p.name === projectName);
        if (project && project.images) {
          const firstCategory = Object.keys(project.images)[0];
          const imageCount = project.images[firstCategory].length;
          newIndices[projectName] = (newIndices[projectName] + 1) % imageCount;
        }
      });
      setPreviewIndices(newIndices);
    }, 3000);

    return () => clearInterval(interval);
  }, [previewIndices]);

  const openGallery = (project) => {
    setActiveProject(project);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setActiveProject(null);
  };

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
        {projects.map((project) => {
          const firstCategory = project.images ? Object.keys(project.images)[0] : null;
          const previewImages = firstCategory ? project.images[firstCategory] : [];
          const previewIndex = previewIndices[project.name] || 0;
          
          return (
            <div
              key={project.name}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 group ${darkMode ? "bg-gray-800/50 border border-gray-700/30" : "bg-white border border-gray-200/70"} ${darkMode ? themeVariables.darkGlow : themeVariables.lightGlow}`}
            >
              {/* Project Image Preview */}
              {previewImages.length > 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={previewImages[previewIndex].src} 
                    alt={`${project.name} preview`} 
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => openGallery(project)}
                      className={`px-4 py-2 rounded-lg ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white font-medium flex items-center gap-2`}
                    >
                      View Gallery
                    </button>
                  </div>
                  
                  {/* Preview Image Label */}
                  <div className={`absolute bottom-0 left-0 right-0 p-2 text-center text-xs font-medium ${darkMode ? "bg-gray-900/70 text-gray-200" : "bg-white/80 text-gray-700"}`}>
                    {previewImages[previewIndex].label}
                  </div>
                  
                  {/* Preview Counter */}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${darkMode ? "bg-gray-900/70 text-gray-200" : "bg-white/80 text-gray-700"}`}>
                    {previewIndex + 1}/{previewImages.length}
                  </div>
                </div>
              )}
              
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
                
                {/* Preview Button */}
                {previewImages.length > 0 && (
                  <button 
                    onClick={() => openGallery(project)}
                    className={`w-full mt-3 py-2 rounded-lg flex items-center justify-center gap-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-200 hover:bg-gray-300 text-gray-700"} transition-colors`}
                  >
                    <span className="text-sm">Preview Images</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Gallery Modal */}
      {galleryOpen && activeProject && (
        <ProjectGallery 
          project={activeProject} 
          darkMode={darkMode} 
          isOpen={galleryOpen} 
          onClose={closeGallery} 
        />
      )}

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