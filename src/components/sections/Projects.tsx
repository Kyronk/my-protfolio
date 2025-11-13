import React, { useRef } from 'react'
import { Presentation } from 'lucide-react';

import Card from '@/components/myComponents/item/Card';

// import { useMediaQuery } from "react-responsive";
// import { useMediaQuery } from "react-responsive";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { servicesData } from "@/constacts/index.ts";

import { projectData } from '@/constacts/projectData';

type Props = {}

const layoutClasses = [
    "md:row-span-2 ", 
    "md:row-span-2 md:row-start-2 ",
    "md:row-span-2 md:col-start-2 md:row-start-3 ",
    "md:row-span-2 md:row-start-4 "
];


const Projects = (props: Props) => {

    



    const serviceRefs = useRef([]);
    
    useGSAP(() => {
        serviceRefs.current.forEach((el) => {
            if (!el) return;

            gsap.from(el, {
                y: 200,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                duration: 1,
                ease: "circ.out",
            });
        });
    }, []);

    return (

        <section className=' bg-main-background dark:bg-main-backgroundDark mx-4'>

            <div className="grid grid-cols-1 gap-4 max-w-[1280px] mx-auto md:grid-cols-2 md:grid-rows-5 p-2"  >

                <div className="bg-none mr-4 p-6 rounded-lg" >
                    <h2 className="text-2xl md:text-4xl font-bold flex items-center " id="projects">
                        <Presentation className='mr-2 text-gray-400 w-5 h-5 md:w-10 md:h-10' strokeWidth={3} />
                        Dự án
                        <span className='text-main-primary ml-2'>
                            cá nhân
                        </span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600">
                        Mình đã làm những gì
                    </p>
                </div>



                {/* {
                    servicesData.map((skill, index) => (

                        <div
                            key={index}
                            
                            className={` ${layoutClasses[index]}`}
                        >
                            <Card 
                                key={skill.id}
                                index={index}
                                service={skill}
                            />
                        </div>

                    ))
                } */}

                {
                    projectData.map((skill, index) => (

                        <div
                            key={index}

                            className={` ${layoutClasses[index]}`}
                        >
                            <Card
                                key={skill.id}
                                index={index}
                                service={skill}
                            />
                        </div>

                    ))
                }
            </div>

        </section>

        // <section
        //     id="services" className="min-h-screen bg-gray-300 rounded-t-4xl  grid-cols-3  px-auto  overflow-x-hidden"
        // >
        //     <div
        //         className='p-2 bg-red-100'
        //     >
        //         <div className='px-3'>
        //             <h1 className='font-normal underline '>Dự án cá nhân</h1>
        //         </div>

        //     </div>


        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-x-hidden">
        //             {servicesData.map((service, index) => (
        //                 <Card
        //                     key={service.id}
        //                     index={index}
        //                     service={service}
        //                 />
        //             ))}
        //         </div>
        //     </div>
        // </section>
    )
}

export default Projects