import React, { useRef, useState } from 'react';
import { Instagram, Github, Linkedin, Loader2 } from 'lucide-react';
import emailjs from "@emailjs/browser";

import { ContactRound } from 'lucide-react';

const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setIsLoading(true);

        emailjs.sendForm(
            'service_dqf8qks',    
            'template_m8w919n',   
            form.current,
            'Hl3Vm7bCJKhgkskbk'   
        )
        .then((result) => {
            
            alert("Tin nhắn đã được gửi thành công! Mình sẽ phản hồi sớm nhất có thể.");
            form.current?.reset(); 

        }, (error) => {
            
            alert("Gửi thất bại. Vui lòng thử lại sau hoặc gửi email trực tiếp cho mình nhé.");

        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <>
            <section
                className="w-full min-h-screen py-16 md:py-24 bg-main-background dark:bg-main-backgroundDark text-gray-900 dark:text-white"
            >


                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 
                        id="contact"
                        className="flex items-center text-xl md:text-5xl font-bold  text-gray-700 mb-16"
                        >
                            <ContactRound className='w-5 h-5 text-gray-400 md:w-10 md:h-10 xl:w-18 xl:h-18 mr-2' />
                        Liên hệ
                        <span className='text-main-primary ml-2'>với mình</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        <div>
                            <h3 className="text-3xl font-semibold  dark:text-blue-400">
                                Kết nối <span className='text-main-primary ml-1'>với mình</span>  
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">
                                Nếu bạn muốn biết thêm về mình hoặc công việc của mình, hoặc chỉ đơn giản là muốn nói xin chào, hãy gửi tin nhắn cho mình. Mình rất muốn nghe từ bạn.
                            </p>

                            <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium">
                                        Tên
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="user_name" 
                                            id="user_name"
                                            required
                                            placeholder="Nhập tên của bạn"
                                            className="w-full rounded-md border-gray-300 bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="user_email" 
                                            id="user_email"
                                            required
                                            placeholder="Nhập email của bạn"
                                            className="w-full rounded-md border-gray-300 bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 border"
                                        />
                                    </div>
                                </div>

                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">
                                        Nội dung
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Nhập tin nhắn của bạn"
                                            className="w-full rounded-md border-gray-300 bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 border"
                                        />
                                    </div>
                                </div>

                                
                                <div className="flex justify-end items-center">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Đang gửi...
                                            </>
                                        ) : (
                                            "Gửi tin nhắn"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                    
                        <div className="flex flex-col space-y-10 md:space-y-12 items-start md:items-end">
                            
                            <div className='flex flex-col items-start md:items-end'>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <a href="mailto:phambaomanhtuongk@gmail.com" className="mt-2 text-blue-600 dark:text-blue-400 break-all hover:underline">
                                    phambaomanhtuongk@gmail.com
                                </a>
                            </div>

                            
                            

                        
                            <div className='flex flex-col items-start md:items-end'>
                                <h3 className="text-xl font-semibold">Mạng xã hội</h3>
                                <div className="flex space-x-4 mt-4">
                                    <a href="https://github.com/Kyronk" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                        <Github size={28} />
                                    </a>
                                
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            
            <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Made with  by Manh Tuong
                </p>
            </footer>
        </>
    );
};

export default ContactSection;