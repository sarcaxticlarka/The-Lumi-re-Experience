// import React from 'react'

// const Experies = () => {
//   return (
//     <div className='bg-[#2F4231] w-full text-white px-24 pt-32'>
//         <p className='text-5xl pb-12 text-[#f5f5dc]'>Our Expertise</p>
//         <h2 className='font-[Moranga] text-9xl w-[70%] text-[#f5f5dc]'>Moments Fused with Elegance & Charm</h2>
         
//     </div>
//   )
// }

// export default Experies

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".expertise-title", {
        scrollTrigger: {
          trigger: ".expertise-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,  
          toggleActions: "play none none none",  
          markers: false,  
        },
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#2F4231] w-full text-white px-24 pt-32"
    >
      <p className="text-3xl pb-12 text-[#f5f5dc] expertise-title">
        Our Expertise
      </p>
      <h2 className="font-[Moranga] text-5xl w-[80%] text-[#f5f5dc] expertise-title">
        Moments Fused with Elegance & Charm
      </h2>
    </div>
  );
};

export default Experies;