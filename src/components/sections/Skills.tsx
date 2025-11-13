
import { Wrench, UserRoundSearch } from 'lucide-react';
import { skillList } from '@/constacts';
import { Skill } from '@/dataTypes/type';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from 'react';

const Skills = () => {

    const gridContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray<HTMLDivElement>(".item-tech");

        items.forEach((item) => {
            const hoverAnimation = gsap.to(item, {
                scale: 1.1,
                borderRadius: 10,
                boxShadow: "0 0 20px 10px #F8E7F6",

                duration: 0.3,
                ease: "power1.inOut",
                paused: true 
            });

            item.addEventListener("mouseenter", () => hoverAnimation.play());
            item.addEventListener("mouseleave", () => hoverAnimation.reverse());
        });

    }, { scope: gridContainer });


    return (
        <section  className="w-full py-24 bg-[#F8E7F6] 
    bg-[linear-gradient(to_bottom,#F8E7F6_0%,#F5F5F5_48%,#F5F5F5_100%)] dark:bg-none dark:shadow-none dark:bg-main-backgroundDark text-white shadow-[0px_-10px_27px_3px_#F8E7F6] h-auto pb-10 xl:min-h-[100vh]">
            <div 
            id="skills"
            className="container mx-auto max-w-screen-xl px-4 md:px-6">

                <div
                    id="about-me"
                    className="mb-16 "
                >

                    <h2
                        className="text-2xl flex items-center md:text-5xl font-bold text-center md:text-start text-gray-700 dark:text-white"
                    >
                        <UserRoundSearch
                            // size={40}
                            className='mr-2 w-5 h-5 md:mr-4 md:w-10 md:h-10  text-gray-400'
                        />
                        Về 
                        
                        <span className="text-main-primary ml-2"> bản thân</span>
                    </h2>


                    <p
                        className="mt-6 text-lg md:text-xl text-center md:text-start text-gray-700 dark:text-gray-300  mx-auto leading-relaxed"
                    >

                        Chào bạn, mình là Tường, một Lập trình viên Web.
                        Mình đam mê xây dựng các ứng dụng web sạch sẽ, hiệu quả và thân thiện với người dùng.
                        Với nền tảng  về React, Node.js và TypeScript, mình thích biến các vấn đề phức tạp thành những giải pháp đơn giản và tinh tế.
                        Hiện tại, mình đang tìm kiếm cơ hội để có thể đóng góp và cùng nhau phát triển.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="flex items-center justify-start text-2xl  md:text-5xl  text-gray-700 dark:text-gray-200 font-bold tracking-tight">
                        <Wrench 
                            className="w-5 h-5 mr-1 md:w-10 md:h-10 md:mr-4 text-center text-gray-400" 
                            
                            />
                        Công nghệ <span className="text-main-primary ml-2"> mà mình sử dụng</span>
                    </h2>
                </div>

                <div
                    ref={gridContainer} 
                    className='grid grid-cols-2 mx-auto lg:grid-cols-3 xl:grid-cols-4 justify-items-center'
                >
                    {
                        skillList?.map((skill: Skill, index: number) => (

                            <div
                                
                                key={index}
                                className='item-tech py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center  cursor-pointer md:w-48 w-40'
                            >
                                <img src={skill.url} alt="" className='w-12' />
                                <h4 className='text-md ml-4 text-black'>{skill.title}</h4>
                            </div>

                        ))

                    }
                </div>



            </div>
        </section>
    );
};

export default Skills;
