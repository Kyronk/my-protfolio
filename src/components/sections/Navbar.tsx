import { useEffect, useRef, useState } from "react";

import { ModeToggle } from '../mode-toggle'

import { Link } from 'react-scroll';
import { FolderCode } from 'lucide-react';

import gsap from "gsap";
import clsx from "clsx";
import { useWindowScroll } from "react-use";

import { navItems } from "@/constacts";

type Props = {}



const Navbar = (props: Props) => {


    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);


    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);



    useEffect(() => {
        if (currentScrollY === 0) {

            setIsNavVisible(true);
            navContainerRef.current?.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {

            setIsNavVisible(false);

        } else if (currentScrollY < lastScrollY) {

            setIsNavVisible(true);

        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 max-w-[1280px]  mx-auto border-none transition-all duration-700 sm:inset-x-6 bg-white/90 dark:bg-gray-300/30 opacity-20  border rounded-lg hidden md:block"

        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">

                        {/* <FolderCode color="#ff47f9" size={45}/> */}
                        <img
                            src="/images/logo/logo.png"
                            alt="Logo cá nhân"
                            className="h-12 w-auto object-contain"
                        />

                    </div>

                    <div className="flex h-full items-center gap-4">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (

                                <Link
                                    key={index}

                                    activeClass="active"
                                    to={item.url}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                    className="text-[#4B5563] dark:text-main-primary transition-all duration-300[text-shadow:0_0_20px_rgba(208, 38, 211,0)] hover:[text-shadow:0_0_30px_rgba(208, 38, 211,1)]"
                                >
                                    <span className="spantest">{item.title}</span>
                                </Link>
                            ))}

                        </div>


                        <ModeToggle />


                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar