import React, { useEffect, useRef, useState } from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Link } from "react-scroll";
import { Github, Linkedin } from 'lucide-react';
import { navItems } from '@/constacts';
import { ModeToggle } from '../mode-toggle';

type Props = {}

const Sidebar = (props: Props) => {

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement[]>([]);
    const contactRef = useRef<HTMLDivElement>(null);
    const topLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const iconTl = useRef<gsap.core.Timeline | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    useGSAP(() => {
        gsap.set(navRef.current, { xPercent: 100 });
        gsap.set([linksRef.current, contactRef.current], {
            autoAlpha: 0,
            x: -20,
        });

        tl.current = gsap
            .timeline({ paused: true })
            .to(navRef.current, {
                xPercent: 0,
                duration: 1,
                ease: "power3.out",
            })
            .to(
                linksRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<"
            )
            .to(
                contactRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<+0.2"
            );

        iconTl.current = gsap
            .timeline({ paused: true })
            .to(topLineRef.current, {
                rotate: 45,
                y: 3.3,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(
                bottomLineRef.current,
                {
                    rotate: -45,
                    y: -3.3,
                    duration: 0.3,
                    ease: "power2.inOut",
                },
                "<"
            );
    }, { dependencies: [linksRef.current, contactRef.current] });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        if (isOpen) {
            tl.current?.reverse();
            iconTl.current?.reverse();
        } else {
            tl.current?.play();
            iconTl.current?.play();
        }
        setIsOpen(!isOpen);
    };


    return (
        <>
            <nav
                ref={navRef}
                className="
                    fixed z-50 flex flex-col justify-between w-full h-full 
                    p-10 md:p-28
    
                    overflow-y-hidden
                    
                    bg-main-primary/10
                    backdrop-blur-lg 

                    text-white 
                    gap-y-10 
                    md:w-1/2 md:left-1/2
                "
            >
                <div
                    className="flex flex-col text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gap-y-4 items-start mt-10"
                >
                    {navItems.map(
                        (section, index) => (
                            <div key={index} ref={(el) => { if (el) linksRef.current[index] = el; }}>
                                <Link
                                    onClick={toggleMenu}
                                    className="transition-all duration-200 cursor-pointer  text-pink-800 dark:text-purple-100  hover:text-fuchsia-400 hover:scale-105 inline-block"
                                    to={section.url}
                                    smooth
                                    offset={0}
                                    duration={1000}
                                >
                                    {section.title}
                                </Link>
                            </div>
                        )
                    )}

                    <ModeToggle />
                </div>

                
                <div ref={contactRef} className="flex flex-col items-center gap-y-4">

                    <div className="flex gap-x-6">
                        <a href="https://github.com/Kyronk"
                            target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </a>

                    </div>
                </div>
            </nav>

            
            <div
                className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all border-[3px] border-main-primary duration-300 bg-main-primary rounded-full cursor-pointer w-14 h-14 md:w-20 md:hidden top-4 right-10"
                onClick={toggleMenu}
                style={
                    showBurger
                        ? { clipPath: "circle(50% at 50% 50%)" }
                        : { clipPath: "circle(0% at 50% 50%)" }
                }
            >
                <span
                    ref={topLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                ></span>
                <span
                    ref={bottomLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                ></span>
            </div>
        </>
    )
}

export default Sidebar