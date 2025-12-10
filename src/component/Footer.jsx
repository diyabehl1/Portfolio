import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-950 overflow-x-hidden

  text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 font-['Poppins']">
          DON'T BE STRANGERS 👋🏻
        </h1>
     
        
        <h2 className="text-lg sm:text-xl">CONNECT WITH ME ONLINE</h2>

        
        <div className="flex flex-wrap justify-center gap-10 mt-8">
        
          <div className="group flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/diya-behl-31529026a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 group-hover:scale-125"
            >
              <img
                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"
                alt="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </a>
            <span className="text-sm sm:text-base mt-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              LinkedIn
            </span>
          </div>

         
          <div className="group flex flex-col items-center ">
            <a
              href="https://github.com/diyabehl1"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 group-hover:scale-125"
            >
              <img
                src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=ffffff"
                alt="GitHub"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </a>
            <span className="text-sm sm:text-base mt-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              GitHub
            </span>
          </div>

         
          <div className="group flex flex-col items-center">
            <a
              href="https://www.instagram.com/_diya.16?igsh=MmdmMHpmOWlmd2Jh&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 group-hover:scale-125"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=ffffff"
                alt="Instagram"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </a>
            <span className="text-sm sm:text-base mt-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              Instagram
            </span>
          </div>

         
          <div className="group flex flex-col items-center">
            <a
              href="https://t.me/diya_behl"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 group-hover:scale-125"
            >
              <img
                src="https://img.icons8.com/?size=100&id=63306&format=png&color=ffffff"
                alt="Telegram"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </a>
            <span className="text-sm sm:text-base mt-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              Telegram
            </span>
          </div>
        </div>

        {/* Email */}
        <p className="text-base sm:text-lg md:text-xl mt-6">
          📧{" "}
          <a
            href="mailto:diyabehl2004@gmail.com"
            className="underline hover:text-purple-300 transition-colors"
          >
            diyabehl2004@gmail.com
          </a>
        </p>

        
        <div className="border-t border-gray-700 mt-10 pt-4 text-sm sm:text-base text-gray-400">
          <p>
            Page created by{" "}
            <span className="text-purple-400 font-medium">Diya Behl</span>
          </p>
          <p>© 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


