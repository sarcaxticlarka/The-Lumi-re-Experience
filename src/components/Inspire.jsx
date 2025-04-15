// import React from 'react'

// const Inspire = () => {
//   return (
//     <div className='h-screen bg-[#0E2624] w-full p-16 relative'>
//       <img
//         className='absolute left-12 w-[23vw] h-[35vh] z-0 object-cover'
//         src="https://images.unsplash.com/photo-1651667773148-9283495a32b7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//       <img
//         className='absolute right-12 bottom-12 w-[22vw]  z-0 object-cover'
//         src="https://images.unsplash.com/photo-1670529776286-f426fb7ba42c?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//       <p className='text-[#f5f5dc] text-center text-4xl pt-20 z-10 relative'>
//         Unleash Your Event's Potential
//       </p>
//       <h1 className='text-[#f5f5dc] relative z-10 text-[8vw] leading-[8vw] text-center font-[Moranga] pt-32'>
//         Design. Create. Celebrate. Your dream event, brought to life
//       </h1>
//     </div>
//   )
// }

// export default Inspire


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Inspire = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".inspire-text", {
        scrollTrigger: {
          trigger: ".inspire-text",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none none",
          markers: false,
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".inspire-img", {
        scrollTrigger: {
          trigger: ".inspire-img",
          start: "top 90%",
          end: "bottom 30%",
          scrub: 1,
          toggleActions: "play none none none",
          markers: false,
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='h-screen bg-[#0E2624] w-full p-16 relative overflow-hidden'>
      <img
        className='inspire-img absolute left-12 w-[23vw] h-[35vh] z-0 object-cover'
        src="https://images.unsplash.com/photo-1651667773148-9283495a32b7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className='inspire-img absolute right-12 bottom-12 w-[22vw] z-0 object-cover'
        src="https://images.unsplash.com/photo-1670529776286-f426fb7ba42c?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <p className='inspire-text text-[#f5f5dc] text-center text-4xl pt-20 z-10 relative'>
        Unleash Your Event's Potential
      </p>
      <h1 className='inspire-text text-[#f5f5dc] relative z-10 text-[8vw] leading-[8vw] text-center font-[Moranga] pt-32'>
        Design. Create. Celebrate. Your dream event, brought to life
      </h1>
    </div>
  );
};

export default Inspire;
