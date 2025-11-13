

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import { ExternalLink } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Import kiểu dữ liệu
// import { ServiceData } from '@/dataTypes/type';
import { Project } from "@/dataTypes/type";

// --- PROPS ---
// Bỏ 'key' ra khỏi props. `key` là một prop đặc biệt do React quản lý ở component cha,
// không nên truyền vào component con như một prop thông thường.
type Props = {
    index: number;
    // service: ServiceData;
    service: Project;
};

// --- COMPONENT ---
const Card = ({ index, service }: Props) => {

    const cardRef = useRef<HTMLDivElement>(null);
    const isDesktop = useMediaQuery({ minWidth: "48rem" });

    // const { id, title, description, image, items } = service;
    const { id, description, image, tech, link, title, demo } = service;
    // console.log(service);



    useGSAP(() => {
        if (!cardRef.current) return;

        gsap.from(cardRef.current, {
            opacity: 0,


            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            duration: 0.6,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <Dialog>

            <div
                ref={cardRef}

                className='bg-white/90 dark:bg-[#101010] rounded-xl h-full flex flex-col border'
            >

                <DialogTrigger asChild>
                    <div className="w-full overflow-hidden cursor-pointer flex-shrink-0 aspect-video">
                        <img
                            src={image[0]}
                            alt={`Ảnh đại diện cho dự án ${title}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
                        />
                    </div>
                </DialogTrigger>

                <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 truncate flex items-center justify-between">
                        <span>{title}</span>
                        <ExternalLink />
                    </h2>

                    <p className="text-base text-gray-600 dark:text-gray-300 flex-grow mb-3 line-clamp-2">
                        {description}
                    </p>

                </div>
            </div>




            {/* <DialogContent
                className="lg:max-w-[1380px]"
            >
                <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">{title}</DialogTitle>
                </DialogHeader>

                <div className='lg:flex lg:gap-10 lg:w-full'>


                    <Carousel className="w-full" opts={{ loop: true }}>
                        <CarouselContent>
                            {image.map((imgUrl, idx) => (
                                <CarouselItem key={idx}>
                                    <div className="p-1">
                                        <img
                                            src={imgUrl}
                                            alt={`Ảnh ${idx + 1} của dự án ${title}`}
                                            className="w-auto aspect-video object-contain rounded-md"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='hidden ' />
                        <CarouselNext className='hidden' />
                    </Carousel>

                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-2">Công nghệ sử dụng:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                            
                        </ul>
                    </div>

                </div>

            </DialogContent> */}



            <DialogContent className="lg:max-w-[1380px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">{title}</DialogTitle>
                </DialogHeader>

                {/* Layout 80/20 (8 phần hình, 2 phần content) */}
                <div className='lg:flex lg:gap-10 lg:w-full'>

                    {/* === CỘT 1: CAROUSEL (80%) === */}
                    <Carousel
                        className="w-full lg:w-4/5" // 80%
                        opts={{ loop: true }}
                    >
                        <CarouselContent>
                            {image.map((imgUrl, idx) => (
                                <CarouselItem key={idx}>
                                    <div className="p-1">
                                        <img
                                            src={imgUrl}
                                            alt={`Ảnh ${idx + 1} của dự án ${title}`}
                                            className="w-full aspect-video object-cover rounded-md"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious className='hidden lg:flex' />
                        <CarouselNext className='hidden lg:flex' /> */}
                    </Carousel>

                    {/* === CỘT 2: NỘI DUNG (20%) === */}
                    <div className="mt-6 w-full lg:w-1/5"> {/* 20% */}

                        <h3 className="font-semibold text-lg mb-4">Công nghệ sử dụng:</h3>

                        <ul className="flex flex-wrap gap-2">
                            {tech.map((t) => (
                                <li
                                    key={t.id}
                                    className="flex items-center gap-1.5 rounded-full py-1 px-2.5"

                                    /* * SỬA Ở ĐÂY:
                                     * Thêm '80' vào cuối mã hex (t.color)
                                     * '80' là 50% opacity trong hệ hex.
                                     * (Ví dụ: #FFFFFF -> #FFFFFF80)
                                     */
                                    style={{ backgroundColor: t.color + '80' }}
                                >
                                    <img
                                        src={t.logo}
                                        alt={t.title}
                                        className="w-4 h-4" // Logo vẫn 100%
                                    />
                                    <span className="text-xs font-medium text-white">
                                        {t.title}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="font-semibold text-lg mt-6 mb-2">Mô tả dự án:</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {description}
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">Links:</h3>
                        <div className="flex flex-wrap gap-4">
                            <a href={link} target="_blank" rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:underline">
                                Xem code
                            </a>

                            {demo && (
                                <a href={demo} target="_blank" rel="noopener noreferrer"
                                    className="text-sm text-green-600 hover:underline">
                                    Live Demo
                                </a>
                            )}
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );


};

export default Card;
