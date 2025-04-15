// import { ArrowRight, ArrowLeft, MapPin, Star } from 'lucide-react';

// export default function RajaAmpatSection() {
//   return (
//     <div className="h-screen relative bg-gray-100  py-32 px-46 flex flex-col justify-center items-center">
// <img
//   className='absolute w-[10vw] left-0 top-0'
//   src="https://images.pexels.com/photos/12115113/pexels-photo-12115113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   alt=""
//   style={{ clipPath: 'polygon(24% 99%, 100% 0, 0 0, 70% 100%)' }}
// />
//       <div className="w-full">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
//           <div className="md:w-1/2 pl-24">
//             <p className="text-2xl text-gray-500">The Lumière Experience</p>
//             <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-2">
//               Where Every Event Becomes a Story
//             </h1>
//           </div>
//           <p className="md:w-1/3 text-2xl text-gray-600 leading-relaxed">
//             Step into a digital world where timelines breathe, themes dance, and guests connect. From micro-moments to major milestones — design it, live it, and relive it.
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 pt-20 md:grid-cols-5 gap-6">
//           {/* Location Card */}
//           <div className="bg-black  text-white rounded-3xl overflow-hidden h-[25vw] relative flex flex-col justify-between">
//             <img src="https://images.unsplash.com/photo-1741851373441-88b6f673d655?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="location" className="absolute inset-0 w-full h-full object-cover opacity-40" />
//             <div className="z-10 p-5 flex flex-col justify-between h-full">
//               <div className="text-sm flex items-center gap-2">
//                 <MapPin className="w-4 h-4" />
//                 Neon Heights
//               </div>
//               <p className="text-xl font-medium">Not just a venue — it's a vibe.
//               </p>
//             </div>
//           </div>

//           {/* Weather Card */}
//           <div className="bg-white rounded-3xl overflow-hidden h-[25vw] relative">
//             <img src="https://images.unsplash.com/photo-1741851374674-e4b7e573a9e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="weather" className="w-full h-full object-cover" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <p className="text-4xl font-bold">32º</p>
//               <p className="text-sm">Golden Hour</p>
//             </div>
//           </div>

//           {/* Rating Card */}
//           <div className=" rounded-3xl overflow-hidden h-[25vw] p-6 shadow-md flex flex-col justify-between">

//             <div className="flex -space-x-2">
//               {[1, 2, 3, 4].map(i => (
//                 <img
//                   key={i}
//                   src={`https://i.pravatar.cc/150?img=${i}`}
//                   alt="avatar"
//                   className="w-10 h-10 rounded-full border-2 border-white"
//                 />
//               ))}
//             </div>
//             <div>
//               <div className="flex items-center text-xl font-semibold text-gray-900">
//                 <Star className="w-5 h-5 text-yellow-500 mr-2" /> 4.6K
//               </div>
//               <p className="text-sm mt-1 text-gray-600">
//                 From RSVP to real-time presence — everyone’s here. You in?
//               </p>
//             </div>
//           </div>

//           {/* Beach Card */}
//           <div className="col-span-2 bg-white rounded-3xl overflow-hidden h-[25vw] relative">
//             <img
//               src="https://images.unsplash.com/photo-1742944085736-65d142cef76d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="beach"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0    flex flex-col justify-between p-6 text-white">
//               <div className="flex justify-end space-x-2">
//                 <button className="bg-white/40 hover:bg-white/70 p-2 rounded-full transition">
//                   <ArrowLeft className="w-4 h-4 text-black" />
//                 </button>
//                 <button className="bg-white p-2 rounded-full">
//                   <ArrowRight className="w-4 h-4 text-black" />
//                 </button>
//               </div>
//               <p className="text-xl font-semibold">
//               Design your event like a cinematic trailer.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { ArrowRight, ArrowLeft, MapPin, Star } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function RajaAmpatSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => { 
    const ctx = gsap.context(() => { 
      gsap.set([imageRef.current, headingRef.current, subheadingRef.current, descriptionRef.current, ...cardsRef.current], {
        opacity: 0,
        y: 50,
        x: 0
      });
      gsap.set(imageRef.current, { x: -100 });
 
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(imageRef.current, {
            x: 0,
            opacity: 1,
            duration: 1
          });
        },
        onLeaveBack: () => {
          gsap.set(imageRef.current, { x: -100, opacity: 0 });
        }
      });
 
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.to([headingRef.current, subheadingRef.current], {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2
          });
        },
        onLeaveBack: () => {
          gsap.set([headingRef.current, subheadingRef.current], { y: 50, opacity: 0 });
        }
      });
 
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.to(descriptionRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8
          });
        },
        onLeaveBack: () => {
          gsap.set(descriptionRef.current, { x: 50, opacity: 0 });
        }
      });
 
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 60%",
          onEnter: () => {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1
            });
          },
          onLeaveBack: () => {
            gsap.set(card, { y: 50, opacity: 0 });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);
 
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="h-screen relative bg-gray-100 py-32 px-46 flex flex-col justify-center items-center"
    >
      <img
        ref={imageRef}
        className='absolute w-[10vw] left-0 top-0'
        src="https://images.pexels.com/photos/12115113/pexels-photo-12115113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        style={{ clipPath: 'polygon(24% 99%, 100% 0, 0 0, 70% 100%)' }}
      />

      <div className="w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="md:w-1/2 pl-24">
            <p ref={subheadingRef} className="text-2xl text-gray-500">The Lumière Experience</p>
            <h1 ref={headingRef} className="text-3xl font-bold text-gray-900 leading-tight mt-2">
              Where Every Event Becomes a Story
            </h1>
          </div>
          <p ref={descriptionRef} className="md:w-1/3 text-sm text-gray-600 leading-relaxed">
            Step into a digital world where timelines breathe, themes dance, and guests connect. From micro-moments to major milestones — design it, live it, and relive it.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 pt-20 md:grid-cols-5 gap-6">
          {/* Location Card */}
          <div 
            ref={addToCardsRef}
            className="bg-black text-white rounded-3xl overflow-hidden h-[25vw] relative flex flex-col justify-between"
          >
            <img src="https://images.unsplash.com/photo-1741851373441-88b6f673d655?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="location" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="z-10 p-5 flex flex-col justify-between h-full">
              <div className="text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Neon Heights
              </div>
              <p className="text-xl font-medium">Not just a venue — it's a vibe.</p>
            </div>
          </div>

          {/* Weather Card */}
          <div 
            ref={addToCardsRef}
            className="bg-white rounded-3xl overflow-hidden h-[25vw] relative"
          >
            <img src="https://images.unsplash.com/photo-1741851374674-e4b7e573a9e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="weather" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-4xl font-bold">32º</p>
              <p className="text-sm">Golden Hour</p>
            </div>
          </div>

          {/* Rating Card */}
          <div 
            ref={addToCardsRef}
            className="rounded-3xl overflow-hidden h-[25vw] p-6 shadow-md flex flex-col justify-between"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center text-xl font-semibold text-gray-900">
                <Star className="w-5 h-5 text-yellow-500 mr-2" /> 4.6K
              </div>
              <p className="text-sm mt-1 text-gray-600">
                From RSVP to real-time presence — everyone's here. You in?
              </p>
            </div>
          </div>

          {/* Beach Card */}
          <div 
            ref={addToCardsRef}
            className="col-span-2 bg-white rounded-3xl overflow-hidden h-[25vw] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1742944085736-65d142cef76d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div className="flex justify-end space-x-2">
                <button className="bg-white/40 hover:bg-white/70 p-2 rounded-full transition">
                  <ArrowLeft className="w-4 h-4 text-black" />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
              <p className="text-xl font-semibold">
                Design your event like a cinematic trailer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}