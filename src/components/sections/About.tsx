import React, { useRef } from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { TextPlugin } from 'gsap/TextPlugin'; // <-- 1. Import TextPlugin


// import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


type Props = {}

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const About = (props: Props) => {

    const imgRef = useRef(null);

    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useGSAP(() => {
    
        const tl = gsap.timeline({
            repeat: -1,       
            repeatDelay: 1,   
        });

        

        
        tl.to(text1Ref.current, {
            text: "Hi, ",     
            duration: 0.5,
            ease: "none",     
        });
        tl.to(text2Ref.current, {
            text: "There!",    
            duration: 0.5,
            ease: "none",
        });

        
        tl.to(text1Ref.current, {
            duration: 2, 
        });

        
        tl.to(text2Ref.current, {
            text: "",          
            duration: 0.5,
            ease: "none",
        });
        tl.to(text1Ref.current, {
            text: "",          
            duration: 0.5,
            ease: "none",
        });

        tl.to(text1Ref.current, {
            text: "Xin ",     
            duration: 0.5,
            ease: "none",
            delay: 0.5,
        });
        tl.to(text2Ref.current, {
            text: "chào!",
            duration: 0.5,
            ease: "none",
        });

        
        tl.to(text1Ref.current, {
            duration: 2,
        });

        
        tl.to(text2Ref.current, {
            text: "",
            duration: 0.5,
            ease: "none",
        });
        tl.to(text1Ref.current, {
            text: "",
            duration: 0.5,
            ease: "none",
        });

        

    }, []);

    useGSAP(() => {
        gsap.fromTo("#home",
            {
                scale: 1,
                borderRadius: 0,
                boxShadow: "0 0 0px 0px rgba(138, 43, 226, 0)" 
            },
            {
                scale: 0.7,
                borderRadius: 30,
                // borderColor: "black",
                // border: 1,
                // boxShadow: "",
                // boxShadow: "0 0 30px 40px #8A2BE2",
                boxShadow: "0 0 20px 10px rgba(138, 43, 226, 1)",

                // backgroundColor: "red",
                scrollTrigger: {
                    trigger: "#home",
                    start: "bottom 90%",
                    end: "bottom 20%",
                    scrub: true,
                    markers: false,
                },
                ease: "power1.inOut",
            });


    });


    return (

        <section
            id="home"
            className="bg-[#f8e7f6] bg-[radial-gradient(circle,#f8e7f6_0%,#f5f5f5_100%)]  dark:bg-none dark:bg-main-backgroundDark py-12 h-[100vh] md:py-24 flex items-center "
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-12 align-middle"
                >
                    <div
                        className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1"
                    >
                    



                        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 h-24 md:h-28"
                        >
                            <span ref={text1Ref}></span>
                            <span ref={text2Ref} className="text-fuchsia-600"></span>

                            <span className="cursor-blink">|</span>

                        </h1>





                        <p
                            className="text-lg sm:text-xl text-gray-600 mb-8"
                        >
                            Thật vui khi bạn đã nhìn thấy mình!
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <Link
                                to="skills"
                                className="px-8 justify-center py-3 text-lg font-medium rounded-lg flex items-center text-white bg-main-primary hover:bg-indigo-700 transition duration-300 shadow-lg"
                            >
                                Bắt Đầu Ngay
                            </Link>
                            

                            <a
                                href="/file/Pham-Bao-Manh-Tuong-Web_developer.pdf"

                                target="_blank"
                                rel="noopener noreferrer"

                                className="px-8 py-3 text-lg font-medium rounded-lg  text-main-primary bg-white dark:bg-main-backgroundDark border border-main-primary hover:bg-indigo-50 transition duration-300"
                            >
                                <span>Tìm Hiểu Thêm</span>
                                <span className='text-sm text-center font-normal ml-1'>(Xem cv)</span>
                            </a>
                        </div>
                    </div>

                    <div
                        className="md:w-1/2 w-full order-1 md:order-2 bg-backgroundImage-custom-gradient-71"
                    >
                        <img
                            
                            src="/images/svg/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
                            alt="Hình minh họa cho Hero Section"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>
                </div>


            </div>
        </section>

    

    )
}

export default About