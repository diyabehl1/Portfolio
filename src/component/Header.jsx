// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState("");

//   const sections = ["About", "Skills","Projects", "Services", "Contact"];

//   const handleScroll = () => {
//     const scrollPos = window.scrollY + 100;

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) {
//         if (
//           scrollPos >= element.offsetTop &&
//           scrollPos < element.offsetTop + element.offsetHeight
//         ) {
//           setActive(section);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed w-full bg-transparent z-50 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
//           {sections.map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 className={`hover:text-blue-400 transition ${
//                   active === item ? "text-blue-400 font-semibold" : ""
//                 }`}
//               >
//                 {item.toUpperCase()}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none item-right"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-7 h-7 text-gray-300 "
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black/90 backdrop-blur-md justify-between ">
//           <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-300 font-medium">
//             {sections.map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item}`}
//                   className="hover:text-blue-400 transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
