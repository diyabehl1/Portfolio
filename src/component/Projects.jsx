import React from "react";
import { motion } from "framer-motion";
import landpage from "../assets/chatbotpic.png";
import toollandpage from "../assets/landpage.png";
import tool from "../assets/tool.png";

const projects = [
  {
    title: "Landing Page Of ChatBot",
    description: "React + Node + JavaScript + MongoDB.",
    img: landpage,
    link: "https://github.com/diyabehl1/landingpage.git",
  },
  {
    title: "Landing Page Of Social Media Tool",
    description: "React + Tailwind Css + Node.js",
    img: toollandpage,
    link: "https://github.com/diyabehl1/tool.git",
  },
  {
    title: "Interface Of Tool Dashboard",
    description: "React + Node.js +Tailwind Css ",
    img: tool,
    link: "https://github.com/diyabehl1/tool.git",
  },
];

export default function ProjectsWithImageBoxes() {
  return (
    <div id="Projects" className="bg-gradient-to-b from-purple-900 via-black to-purple-950 py-16 md:py-24 overflow-x-hidden">

      {/* RESPONSIVE HEADING */}
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold mb-12 mt-20 text-center 
          leading-tight 
          bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600
          bg-clip-text text-transparent 
          drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]
          px-4
        "
      >
        My Projects
      </h2>

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20 px-4 sm:px-6 md:px-10 mt-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`w-full flex flex-col md:flex-row items-center 
              gap-8 md:gap-12 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >

            {/* IMAGE BOX */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl group"
            >
              <img
                src={project.img}
                alt={project.title}
                className="
                  w-full 
                  h-52 sm:h-60 md:h-72 lg:h-80 
                  object-cover 
                  rounded-2xl
                  transition-transform duration-700 group-hover:scale-110
                "
              />

              {/* Shine Effect */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-r
                  from-transparent via-white/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  -translate-x-full group-hover:translate-x-full
                  transition-all duration-700
                "
              ></div>
            </motion.div>

            {/* DETAILS */}
            <div className="md:w-1/2 text-center md:text-left px-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5 text-sm sm:text-base md:text-lg leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="
                  inline-block 
                  bg-purple-600 px-5 sm:px-6 
                  py-2 sm:py-3 
                  rounded-xl 
                  text-base sm:text-lg 
                  font-medium 
                  hover:bg-purple-700 
                  transition
                "
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}






// import React from 'react'
// import im1 from '../images/chatbotpic.png'
// import im2 from '../images/landpage.png'

// const Projects = () => {
//   return (
//     <>
//       <div className="min-h-screen animated-bg text-white py-20 px-6 flex flex-col justify-center items-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 italic bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 drop-shadow-lg">
//           Some of My Projects
//         </h1>

//         {/* Orbit Container */}
//         <div className="orbit-container">
//           <img src={im1} alt="Chatbot Project" className="orbit-image" />
//           <img src={im2} alt="Landing Page Project" className="orbit-image" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Projects



