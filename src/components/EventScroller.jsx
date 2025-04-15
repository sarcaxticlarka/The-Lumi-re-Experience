import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => { 
    ScrollTrigger.create({
      trigger: ".event1",
      pin: ".event1 .pinSection",
      // markers: true,
      start: "top top",
      end: "bottom top",
    });

    ScrollTrigger.create({
      trigger: ".event2",
      pin: ".event2 .pinSection",
      // markers: true,
      start: "top top",
      end: "bottom top",
    });

    ScrollTrigger.create({
      trigger: ".event3",
      pin: ".event3 .pinSection",
      // markers: true,
      start: "top top",
      end: "bottom top",
    });

    ScrollTrigger.create({
      trigger: ".event4",
      pin: ".event4 .pinSection",
      // markers: true,
      start: "top top",
      end: "bottom top",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="conatner-app bg-[#2F4231] overflow-x-hidden">
      <style jsx>{`
        .box {
          position: relative;
          overflow: hidden;
          height: 100vh;
          background-color: transparent;
        }
        .event1 {
          width: 100%;
        }
        .event2 {
          width: 70vw;
          margin: 0 auto;
        }
        .event3 {
          width: 80vw;
          margin: 0 auto;
        }
        .event4 {
          width: 90vw;
          margin: 0 auto;
        }
        .pinSection {
          height: 100%;
          width: 100%;
          display: flex;
          background-color: #2F4231; /* Dark background for content readability */
        }
        .image-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
        }
        .image {
          width: 100%;
          height: 40vw;
          object-fit: cover;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          color: white;
          padding-left: 5vw;
        }
        .pin-spacer {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
          .event2 .content{
            background-color: #2F4231;}
      `}</style>

 
      <div className="box event1">
        <div className="pinSection">
          <div className="image-container flex-[0_0_60%]">
            <img 
              className="image" 
              src="https://images.pexels.com/photos/3972697/pexels-photo-3972697.jpeg" 
              alt="" 
            />
          </div>
          <div className="content">
            <p className='text-3xl pt-32 pb-4 font-[Montez] '>01</p>
            <h5 className='text-7xl pt-4 pb-10'>Planning</h5>
            <p className='font-[Montez] text-5xl tracking-tight leading-15 w-[80%]'>
              This is the space to describe the service and explain how customers or clients can benefit from it...
            </p>
          </div>
        </div>
      </div>

     
      <div className="box event2">
        <div className="pinSection">
          <div className="image-container flex-[0_0_60%]">
            <img 
              className="image" 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="" 
            />
          </div>
          <div className="content">
            <p className='text-3xl pt-32 pb-4 font-[Montez]'>02</p>
            <h5 className='text-7xl pt-4 pb-10'>Design</h5>
            <p className='font-[Montez] text-5xl tracking-tight leading-15 w-[80%]'>
              This is the space to describe the service and explain how customers or clients can benefit from it...
            </p>
          </div>
        </div>
      </div>

 
      <div className="box event3">
        <div className="pinSection">
          <div className="image-container flex-[0_0_60%]">
            <img 
              className="image" 
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg" 
              alt="" 
            />
          </div>
          <div className="content">
            <p className='text-3xl pt-32 pb-4 font-[Montez]'>03</p>
            <h5 className='text-7xl pt-4 pb-10'>Logistics</h5>
            <p className='font-[Montez] text-5xl tracking-tight leading-15 w-[80%]'>
              This is the space to describe the service and explain how customers or clients can benefit from it...
            </p>
          </div>
        </div>
      </div>

    
      <div className="box event4">
        <div className="pinSection">
          <div className="image-container flex-[0_0_60%]">
            <img 
              className="image" 
              src="https://images.pexels.com/photos/11828428/pexels-photo-11828428.jpeg" 
              alt="" 
            />
          </div>
          <div className="content">
            <p className='text-3xl pt-32 pb-4 font-[Montez]'>04</p>
            <h5 className='text-7xl pt-4 pb-10'>Explore</h5>
            <p className='font-[Montez] text-5xl tracking-tight leading-15 w-[80%]'>
              This is the space to describe the service and explain how customers or clients can benefit from it...
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;