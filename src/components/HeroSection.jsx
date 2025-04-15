// import React from 'react';
// import { Moon } from 'lucide-react';
// import bgVedio from '../assets/bgvedio.mp4';

// export default function HeroSection() {
//     return (
//         <div className="relative bg-black h-screen w-full p-8 text-white">
//             {/* Background Video */}
//             <video 
//                 autoPlay 
//                 loop 
//                 muted 
//                 className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0"
//             >
//                 <source src={bgVedio} type="video/mp4" />
//             </video>

//             {/* Header */}
//             <header className="flex justify-between items-center px-6 py-4 md:px-12 z-10">
//                 <div className="border-2 border-[#FF706A] p-2">
//                     <span className="text-[#FF706A] font-serif text-xl font-bold">Skillsvarz</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <button className="rounded-full bg-black border border-gray-700 p-2 flex items-center justify-center">
//                         <Moon size={46} className="text-[#FF706A]" />
//                     </button>
//                     <button className="hidden md:block">
//                         <div className="space-y-1">
//                             <div className="w-12 h-0.5 bg-white"></div>
//                             <div className="w-8 h-0.5 bg-white"></div>
//                         </div>
//                     </button>
//                 </div>
//             </header>

//             <main className="px-6 md:px-12 pt-16 pb-32 z-10">
//                 <div className="mb-16">
//                     <p className="uppercase tracking-wider text-2xl font-light mb-1">REDEFINING <span className="inline-block w-12 h-px bg-white mx-4"></span> CELEBRATION</p>
//                 </div>

//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                     <h1 className="text-6xl flex flex-col justify-center items-center md:text-8xl font-serif leading-tight text-center">
//                         <span className="text-[#FF706A] block  font-['Moranga'] font-[700] ">Plan with purpose.</span>
//                         <span className="text-white font-['Moranga'] font-[700] block"> Celebrate with ease.</span>
//                     </h1>
//                 </div>

//                 <div className="relative mt-64 mb-12">
//                     <div className="absolute left-0 w-40 h-32">
//                         <div className="rounded-full border border-[#FF706A] text-[#FF706A] text-xs flex items-center justify-center relative w-32 h-32">
//                             <div className="text-center text-[#FF706A] absolute inset-0 flex items-center justify-center">
//                                 <span className="uppercase text-[0.6vw] tracking-widest">Scroll to explore</span>
//                             </div>
//                             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                                 <svg width="26" height="26" viewBox="0 0 16 16" className="text-[#FF706A]">
//                                     <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             <div className="absolute bottom-0 right-0 px-6 md:px-12 py-8 flex justify-end gap-4 z-10">
//                 <button className="text-[#FF706A] uppercase text-xl tracking-wider">
//                 Create Your Own &gt;
//                 </button>
//                 <button className="border border-[#FF706A] px-6 py-4 rounded-full text-xl uppercase tracking-wider">
//                 Explore Events
//                 </button>
//             </div>
//         </div>
//     );
// }



// import React, { useEffect, useRef } from 'react';
// import { Moon } from 'lucide-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import bgVedio from '../assets/bgvedio.mp4';

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//     const headlineRef = useRef(null);
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             // Animate on load and scroll
//             gsap.from(headlineRef.current.children, {
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top center",
//                     toggleActions: "play none none reset", // replay when scrolls into view
//                 },
//                 y: 100,
//                 opacity: 0,
//                 duration: 1.2,
//                 ease: 'power3.out',
//                 stagger: 0.2,
//                 scrub: true,
//             });
//         }, containerRef);

//         return () => ctx.revert(); // Clean up animation
//     }, []);

//     return (
//         <div ref={containerRef} className="relative bg-black h-screen w-full p-8 text-white">
//             {/* Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0"
//             >
//                 <source src={bgVedio} type="video/mp4" />
//             </video>

//             {/* Header */}
//             <header className="flex justify-between items-center px-6 py-4 md:px-12 z-10">
//                 <div className="border-2 border-[#FF706A] p-2">
//                     <span className="text-[#FF706A] font-serif text-xl font-bold">Skillsvarz</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <button className="rounded-full bg-black border border-gray-700 p-2 flex items-center justify-center">
//                         <Moon size={46} className="text-[#FF706A]" />
//                     </button>
//                     <button className="hidden md:block">
//                         <div className="menu space-y-1">
//                             <div className="w-12 h-0.5 bg-white"></div>
//                             <div className="w-8 h-0.5 bg-white"></div>
//                         </div>
//                     </button>
//                 </div>
//             </header>

//             <main className="px-6 md:px-12 pt-16 pb-32 z-10">
//                 <div className="mb-16">
//                     <p className="uppercase tracking-wider text-2xl font-light mb-1">REDEFINING <span className="inline-block w-12 h-px bg-white mx-4"></span> CELEBRATION</p>
//                 </div>

//                 {/* Animated Headline */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                     <h1
//                         ref={headlineRef}
//                         className="text-6xl flex flex-col justify-center items-center md:text-8xl font-serif leading-tight text-center"
//                     >
//                         <span className="text-[#FF706A] block font-['Moranga'] font-[700]">
//                             Plan with purpose.
//                         </span>
//                         <span className="text-white font-['Moranga'] font-[700] block">
//                             Celebrate with ease.
//                         </span>
//                     </h1>
//                 </div>

//                 {/* Scroll Icon */}
//                 <div className="relative mt-64 mb-12">
//                     <div className="absolute left-0 w-40 h-32">
//                         {/* <div className="rounded-full border border-[#FF706A] text-[#FF706A] text-xs flex items-center justify-center relative w-32 h-32">
//                             <div className="text-center text-[#FF706A] absolute inset-0 flex items-center justify-center">
//                                 <span className="uppercase text-[0.6vw] tracking-widest">Scroll to explore</span>
//                             </div>
//                             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                                 <svg width="26" height="26" viewBox="0 0 16 16" className="text-[#FF706A]">
//                                     <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
//                                 </svg>
//                             </div>
//                         </div> */}
//                         <div className="group relative w-32 h-32 top-108 rounded-full border border-[#FF706A] text-[#FF706A] text-xs flex items-center justify-center overflow-hidden cursor-pointer transition-colors duration-300">
//                             {/* Pink fill background */}
//                             <span className="absolute inset-0 bg-[#FF706A] scale-0 rounded-full origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0"></span>

//                             {/* Text */}
//                             <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
//                                 <span className="uppercase text-[0.6vw] tracking-widest group-hover:text-white transition-colors duration-300">
//                                     Scroll to explore
//                                 </span>
//                             </div>

//                             {/* Icon */}
//                             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
//                                 <svg width="26" height="26" viewBox="0 0 16 16" className="text-[#FF706A] group-hover:text-white transition-colors duration-300">
//                                     <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
//                                 </svg>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </main>

//             {/* Buttons */}
//             <div className="absolute bottom-0 right-0 px-6 md:px-12 py-8 flex justify-end gap-4 z-10">
//                 <button className="text-[#FF706A] uppercase text-xl tracking-wider">
//                     Create Your Own &gt;
//                 </button>
//                 <button className="relative overflow-hidden border border-[#FF706A] px-6 py-4 rounded-full text-xl uppercase tracking-wider text-white z-10 group">
//                     <span className="relative z-10">Explore Events</span>
//                     <span className="absolute inset-0 rounded-full bg-[#FF706A] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0"></span>
//                 </button>

//             </div>
//         </div>
//     );
// }


import React, { useEffect, useRef, useState } from 'react';
import { Moon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import bgVedio from '../assets/bgvedio.mp4';
import mhome from '../assets/mhome.png';
import mabout from '../assets/about.png';
import experinece from '../assets/experince.png';
import inspire from '../assets/inspire.png';
import gStart from '../assets/getstarted.png';
import HeartCursor from './HeartCursor()';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const headlineRef = useRef(null);
    const containerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { title: "Home", image: mhome},
        { title: "About", image: mabout },
        { title: "Inspire" ,image: inspire },
        { title: "Features", image: experinece},
        { title: "Contact", image: gStart },
      ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headlineRef.current.children, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    toggleActions: "play none none reset",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.2,
                scrub: true,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative bg-black h-screen w-full p-2 text-white overflow-hidden">
            {/* Background Video */}
            {/* <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0"
            >
                <source src={bgVedio} type="video/mp4" />
            </video> */}

            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 md:px-12 z-10">
                <div className="border-2 border-[#FF706A] p-2">
                    <span className="text-[#FF706A] font-serif text-xl font-bold px-4">The Lumière Experience</span>
                </div>
                <div className="flex items-center gap-4">
                    {/* <button className="rounded-full bg-black border border-gray-700 p-2 flex items-center justify-center">
                        <Moon size={46} className="text-[#FF706A]" />
                    </button> */}
                    <button onClick={() => setMenuOpen(true)} className="hidden md:block z-20">
                        <div className="relative group w-12 h-12 flex items-center justify-center">
                           
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#FF706A] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out w-16 h-16"></div>
                            </div>

                      
                            <div className="menu space-y-1 z-10">
                                <div className="w-8 h-0.5 bg-white transition-all duration-300"></div>
                                <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
                            </div>
                        </div>

                    </button>
                </div>
            </header>

            <main className="px-6 md:px-12 pt-4 pb-32 z-10">
                <div className="mb-8">
                    <p className="uppercase tracking-wider text-sm font-light mb-1">
                        REDEFINING <span className="inline-block w-12 h-px bg-white mx-4"></span> CELEBRATION
                    </p>
                </div>

             
                <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <h1
                        ref={headlineRef}
                        className="text-2xl flex flex-col justify-center items-center md:text-8xl font-serif leading-tight text-center"
                    >
                        <span className="text-[#FF706A] block font-['Moranga'] font-[700]">
                            Plan with purpose.
                        </span>
                        <span className="text-white font-['Moranga'] font-[700] block">
                            Celebrate with ease.
                        </span>
                    </h1>
                </div>

              
                <div className="relative mt-64 mb-12">
                    <div className="absolute -left-4 w-40 h-32">
                        <div className="group relative w-24 h-24 top-10 rounded-full border border-[#FF706A] text-[#FF706A] text-xs flex items-center justify-center overflow-hidden cursor-pointer transition-colors duration-300">
                            <span className="absolute inset-0 bg-[#FF706A] scale-0 rounded-full origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0"></span>
                            <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
                                <span className="uppercase text-[0.6vw] tracking-widest group-hover:text-white transition-colors duration-300">
                                    Scroll to explore
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                                <svg width="26" height="26" viewBox="0 0 16 16" className="text-[#FF706A] group-hover:text-white transition-colors duration-300">
                                    <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

           
            <div className="absolute bottom-0 right-0 px-6 md:px-12 py-8 flex justify-end gap-4 z-10">
                <button className="text-[#FF706A] uppercase text-xl tracking-wider">
                    Create Your Own &gt;
                </button>
                <button className="relative overflow-hidden border border-[#FF706A] px-6 py-4 rounded-full text-xl uppercase tracking-wider text-white z-10 group">
                    <span className="relative z-10">Explore Events</span>
                    <span className="absolute inset-0 rounded-full bg-[#FF706A] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0"></span>
                </button>
            </div>

      
            {menuOpen && (

                <div className="fixed inset-0 bg-[#0E2624] text-white flex flex-col items-center justify-center space-y-8 text-4xl z-50 transition-all duration-500">
                    <HeartCursor />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 right-8 text-white text-3xl font-bold"
                >
                  ✕
                </button>
            
                {menuItems.map((item, index) => (
                  <div className="relative group w-full flex justify-center items-center" key={index}>
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={`${item.title} background`}
                      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 w-[50vw]  object-cover rounded-3xl "
                    />
            
                    {/* Menu Text */}
                    <a
                      href="#"
                      className="relative z-10 font-[Moranga] text-7xl text-white   transition-all duration-500"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
        </div>
    );
}
