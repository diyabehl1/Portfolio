import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaBullhorn, FaHandsHelping, FaPalette } from "react-icons/fa";
import { MdCleanHands, MdManageAccounts } from "react-icons/md";

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      icon: <MdManageAccounts className="text-4xl text-purple-300 mb-3" />,
      description:
        "Handling all social media platforms — managing posts, captions, and creative ideas to grow engagement through strategy and Meta ads.",
    },
    {
      title: "Web Development",
      icon: <FaCode className="text-4xl text-purple-300 mb-3" />,
      description:
        "Creation of fast, responsive, and well structured websites with smooth user interactions. "
        ,
    },
    {
      title: "Clean Code",
      icon: <MdCleanHands className="text-4xl text-purple-300 mb-3" />,
      description:
        "Writing readable, maintainable code following modern standards for clarity, scalability, and long-term quality.",
    },
    {
      title: "Responsive Design",
      icon: <FaMobileAlt className="text-4xl text-purple-300 mb-3" />,
      description:
        " Smooth  User Friendly website and user-friendly experiences across all devices — mobile, tablet, and desktop.",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="text-4xl text-purple-300 mb-3" />,
      description:
        "Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions,.",
    },
    {
      title: "Fast Support",
      icon: <FaHandsHelping className="text-4xl text-purple-300 mb-3" />,
      description:
        "Quick, reliable support throughout the week (except Sunday) for seamless collaboration and updates.",
    },
  ];

  return (
    <section id="Services" className="text-white bg-gradient-to-r from-[#1f1f1f] via-[#3b0a45] to-[#5b21b6] bg-[length:200%_200%] animate-[gradientShift_8s_ease_infinite] min-h-screen py-16 px-6 overflow-x-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
    font-bold mb-6=4 mt-32 text-center 
    leading-normal 
    bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600 
    bg-clip-text text-transparent 
    drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]
   ">
          My Services
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Transforming ideas into elegant digital experiences.
        </p>
      </motion.div>

      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-purple-500/30 rounded-2xl p-6 text-center shadow-md hover:shadow-purple-500/40 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center">
              {service.icon}
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-200">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.2, 1.4, 1.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"
      ></motion.div>

      
    </section>
  );
};

export default Services;
