import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const texts = containerRef.current.querySelectorAll(".text");

        texts.forEach((text) => {
            gsap.to(text, {
                backgroundSize: "100%",
                color: "#ffffff",  
                ease: "none",
                scrollTrigger: {
                    trigger: text,
                    start: "top 20%",
                    end: "center 20%",
                    scrub: true,
                },
            });
        });
    }, []);

    const lines = [
        { en: "Design Your Event", kr: "Plan with ease and style." },
        { en: "Build the Perfect Timeline", kr: "Organize every moment." },
        { en: "Craft Guest Experiences", kr: "Make it memorable for everyone." },
        { en: "Stay Updated in Real-Time", kr: "Live updates, zero hassle." },
        { en: "Create Lasting Memories", kr: "Turn moments into memories." },
    ];

    return (
        <>
            <style>{`
        .layout {
            padding: 5vw 7vw;
            width: 100vw;
            min-height: 100vh;
            background-color: #000;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        .text {
            display: flex;
            font-family: 'Moranga', sans-serif;
            font-weight: 100;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            position: relative;
            white-space: nowrap;
            font-size: 7vw;
            letter-spacing: -0.01em;
            line-height: 100%;
            margin: 0;
            width: 100%;
            color: rgb(45, 44, 44); /* initial color */
            background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            background-size: 0%;
            transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
            border-bottom: 1px solid #2f2b28;
            padding: 10px 0;
        }

        .text > span {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
            font-size: 7.5vw;
            background-color: #FF706A;
            color: #0d0d0d;
            clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
            transform-origin: center;
            transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
        }

        .text:hover > span {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            width: 100vw;
        }
        `}</style>

            <div className="layout relative">
                <img src="" alt="" />
                <div className="container" ref={containerRef}>
                    {lines.map((line, index) => (
                        <div className="text" key={index}>
                            {line.en} <span>{line.kr}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutSection;
