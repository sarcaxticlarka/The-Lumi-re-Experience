// import React from 'react'

// const Start = () => {
//     return (
//         <div className='h-screen w-full bg-[#2F4231] relative'>
//             <p className='font-[Moranga] font-lighter text-[#f5f5dc] leading-[5vw] text-[5vw] z-9 absolute top-[20%] left-[8%] w-[60%]'>Let’s Start Planning the Best Day of Your Life</p>
//             <img className='absolute right-0 opacity-[80%] h-[88vh] w-[65%] cover' src="https://images.unsplash.com/photo-1550155857-26dbecd14a41?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//             <div className="group h-[15vw] w-[15vw] border border-white border-[2px] rounded-full flex items-center justify-center absolute top-[45%] left-[20%] overflow-hidden relative">
//                 <div className="absolute inset-0 bg-[#f5f5dc] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full z-0"></div>
//                 <h1 className="text-3xl text-[#f5f5dc] group-hover:text-black transition-colors duration-500 z-10">Get Started</h1>
//             </div>

//         </div>
//     )
// }

// export default Start

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Start = () => {
  const startRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".start-title", {
        scrollTrigger: {
          trigger: ".start-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none none",
          markers: false,
        },
        y: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".start-button", {
        scrollTrigger: {
          trigger: ".start-button",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none none",
          markers: false,
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, startRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={startRef} className="h-screen w-full bg-[#2F4231] relative">
      <p className="start-title font-[Moranga] font-lighter text-[#f5f5dc] leading-[5vw] text-[5vw] z-9 absolute top-[20%] left-[8%] w-[60%]">
        Let’s Start Planning the Best Day of Your Life
      </p>
      <img
        className="absolute right-0 opacity-[80%] h-[88vh] w-[65%] cover"
        src="https://images.unsplash.com/photo-1550155857-26dbecd14a41?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="start-button group h-[15vw] w-[15vw] border border-white border-[2px] rounded-full flex items-center justify-center absolute top-[45%] left-[20%] overflow-hidden relative">
        <div className="absolute inset-0 bg-[#f5f5dc] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full z-0"></div>
        <h1 className="text-3xl text-[#f5f5dc] group-hover:text-black transition-colors duration-500 z-10">
          Get Started
        </h1>
      </div>
    </div>
  );
};

export default Start;
