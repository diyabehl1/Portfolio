import React from 'react'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Services from './Services'
import Projects from './Projects'
// import Header from './Header'
import Skills from './Skills'
import { Typewriter } from "react-simple-typewriter";
import arrow from '../assets/arrow.png'

const Main = () => {



  
  return (
   <>
   {/* <div className=''>   <Header></Header>
   </div> */}
   <div className="relative w-full overflow-hidden py-16 sm:py-24 text-center pt-40 sm:pt-40">

      {/* FLOATING ICONS — YOUR ORIGINAL ICONS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <img src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png"
          className="tech-icon absolute top-[8%] left-[60%]" />

        <img src="https://img.icons8.com/?size=100&id=6ZSvYluEpLrL&format=png"
          className="tech-icon absolute top-[40%] left-[80%]" />

        <img src="https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png"
          className="tech-icon absolute bottom-[18%] left-[65%]" />

        <img src="https://img.icons8.com/?size=100&id=dEXTMmbBY2Ig&format=png"
          className="tech-icon absolute top-[32%] left-[12%]" />

        <img src="https://img.icons8.com/?size=100&id=74402&format=png"
          className="tech-icon absolute bottom-[20%] left-[22%]" />

        <img src="https://img.icons8.com/?size=100&id=13664&format=png"
          className="tech-icon absolute top-[13%] left-[30%]" />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-4">

        {/* NAME */}
        <h1
          className="shimmer-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
          font-extrabold italic mx-auto bg-clip-text text-transparent 
          bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 
          drop-shadow-[0_6px_25px_rgba(180,100,255,0.6)] tracking-wider font-['Playfair_Display']"
        >
          DIYA BEHL
        </h1>

        {/* TYPING EFFECT */}
        <p
          className="text-lg sm:text-xl md:text-2xl mt-4 mx-auto 
          bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-white 
          drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)] font-['Poppins']"
        >
          <Typewriter
            words={[
              "Full Stack Developer | Social Media Manager"
            ]}
            loop={1}
            cursor
            cursorColor="#fff"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </p>

        {/* Catchy Line */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-purple-300 italic tracking-wide">
          Crafting exceptional digital experiences with modern technologies 
        </p>

        
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://www.linkedin.com/in/diya-behl-31529026a" target="_blank" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png" className="social-icon" />
          </a>

          <a href="https://github.com/diyabehl1" target="_blank" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png" className="social-icon" />
          </a>

          <a href="https://www.instagram.com/_diya.16" target="_blank" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png" className="social-icon" />
          </a>
        </div>

      
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="#Contact"
            className="px-7 py-3 text-lg font-semibold rounded-xl 
       bg-[#E9D5FF] text-purple-800 hover:bg-[#D8B4FE]
            shadow-xl hover:scale-105 transition hover:shadow-purple-500/50 tracking-wide"
          >
            Contact
          </a>

          <a
            href="#Projects"
            className="px-7 py-3 text-lg font-semibold rounded-xl 
            bg-[#E9D5FF] text-purple-800 hover:bg-[#D8B4FE]

            shadow-xl hover:scale-105 transition hover:shadow-purple-500/50 tracking-wide"
          >
            View Projects
          </a>
        </div>

      
        <div className="mt-38 flex flex-col items-center">
          <p className="text-sm text-purple-200 mb-1 tracking-wide">Scroll to explore more</p>

          <div className="animate-bounce">
            <img
              src={arrow}
              className="w-8 opacity-80"
              alt="down arrow"
            />
          </div>
        </div>

      </div>
    </div>




<About></About>
<Skills></Skills>
<Projects></Projects>

<Services></Services>

   <div className=''>
    <Contact></Contact>
   </div>
   
    
   <Footer></Footer>
   </>
  )
}

export default Main