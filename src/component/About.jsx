import { motion } from "framer-motion";

export default function About() {

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, 
        delayChildren: 0.3,
      }
    }
  };

  
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div id="About"
    className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 mb-20 overflow-x-hidden">

   
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center w-full"
      >

       
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold mb-8 text-center leading-normal 
          bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600 
          bg-clip-text text-transparent 
          drop-shadow-[0_0_25px_rgba(192,132,252,0.8)] pb-2"
        >
          ABOUT ME
        </motion.h1>

        {/* ABOUT TEXT */}
        <motion.div
          variants={item}
          className="max-w-5xl text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 leading-relaxed">
            I’m a{" "}
            <span className="text-purple-300 font-bold">Versatile Web Developer</span> and{" "}
            <span className="text-pink-300 font-bold">Social Media Manager</span> with hands-on
            experience in{" "}
            <span className="text-purple-400 font-semibold">Full Stack Development</span> using the{" "}
            <span className="text-indigo-300">MERN Stack</span> (
            <span className="text-gray-300">MongoDB, Express, React, Node.js</span>).
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed px-4">
            I focus on building{" "}
            <span className="text-purple-300 font-medium">responsive, clean and user-friendly</span>{" "}
            web applications while also managing impactful{" "}
            <span className="text-pink-300 font-medium">social media campaigns</span> across{" "}
            <span className="text-blue-400 font-semibold">Instagram</span>,{" "}
            <span className="text-blue-500 font-semibold">Meta</span>, and{" "}
            <span className="text-blue-600 font-semibold">Facebook</span>. My goal is to merge{" "}
            <span className="text-purple-300 font-medium">creativity and technology</span> to create
            seamless, engaging digital experiences.
          </p>
        </motion.div>

     
        <motion.div
          variants={item}
          className="mt-8 flex justify-center"
        >
          <a
            href="/Diya Resume.pdf"
            download="Diya_Behl_CV.pdf"
            className="relative inline-block px-8 py-3 font-semibold rounded-full text-lg 
              bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600
              text-white shadow-[0_0_25px_rgba(192,132,252,0.8)]
              transition-transform transform hover:scale-105 hover:shadow-[0_0_40px_rgba(192,132,252,1)]
              focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Download CV
          </a>
        </motion.div>

       
        <motion.div
          variants={item}
          className="mt-10 h-1 w-40 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 
          rounded-full shadow-[0_0_20px_rgba(192,132,252,0.8)] animate-pulse"
        ></motion.div>

      </motion.div>
    </div>
  );
}
