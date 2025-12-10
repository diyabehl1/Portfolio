import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaWordpress 
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "React.js", level: 80, icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "MongoDB", level: 70, icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "Python", level: 80, icon: <FaPython className="text-yellow-300 text-3xl" /> },
    { name: "WordPress", level: 85, icon: <FaWordpress className="text-blue-400 text-3xl" /> },
  ];

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div id="Skills" ref={ref} className="min-h-screen px-6 py-20 text-white flex flex-col items-center">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center 
        bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600
        bg-clip-text text-transparent drop-shadow-lg"
      >
        My Skills
      </motion.h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                {s.icon}
                <span className="font-semibold text-lg">{s.name}</span>
              </div>
              <span className="text-gray-400">{s.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: visible ? `${s.level}%` : 0 }}
                transition={{ duration: 1.5 }}
                className="h-3 rounded-full bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
