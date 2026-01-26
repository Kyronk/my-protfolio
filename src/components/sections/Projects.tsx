import React, { useRef } from 'react'
import { Presentation } from 'lucide-react';
import Card from '@/components/myComponents/item/Card';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { servicesData } from "@/constacts/index.ts";
import { projectData } from '@/constacts/projectData';

type Props = {}


const layoutClasses = [
    "md:col-start-2 md:row-start-1 md:row-span-2",
    "md:col-start-1 md:row-start-2 md:row-span-2",
    "md:col-start-2 md:row-start-3 md:row-span-2",
    "md:col-start-1 md:row-start-4 md:row-span-2",
    "md:col-start-2 md:row-start-5 md:row-span-2",
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
        <section className='bg-main-background dark:bg-main-backgroundDark mx-4'>
        
            <div className="grid grid-cols-1 gap-4 max-w-[1280px] mx-auto md:grid-cols-2 p-2">
                
                
                <div className="bg-none mr-4 p-6 rounded-lg md:row-span-1">
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

                {projectData.map((skill, index) => (
                    <div
                        key={index}
                        className={`${layoutClasses[index] || ""}`} 
                    >
                        <Card
                            key={skill.id}
                            index={index}
                            service={skill}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects