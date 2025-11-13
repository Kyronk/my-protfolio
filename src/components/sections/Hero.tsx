import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (

        <section
            className="bg-main-background dark:bg-main-backgroundDark py-12 h-[100vh] md:py-24 flex items-center "
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
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
                        >
                            Khởi đầu Hành trình <span className="text-indigo-600">Tuyệt vời</span> Cùng Chúng Tôi
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-600 mb-8"
                        >
                            Tận dụng công nghệ hiện đại để đạt được mục tiêu của bạn. Đã đến lúc biến ý tưởng thành hiện thực.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <a href="#"
                                className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg"
                            >
                                Bắt Đầu Ngay
                            </a>
                            <a href="#"
                                className="px-8 py-3 text-lg font-medium rounded-lg text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 transition duration-300"
                            >
                                Tìm Hiểu Thêm
                            </a>
                        </div>
                    </div>

                    <div
                        className="md:w-1/2 w-full order-1 md:order-2"
                    >
                        <img
                            src="https://media.istockphoto.com/id/814423752/vi/anh/con-m%E1%BA%AFt-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-m%E1%BA%ABu-v%E1%BB%9Bi-trang-%C4%91i%E1%BB%83m-ngh%E1%BB%87-thu%E1%BA%ADt-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-c%E1%BA%ADn-c%E1%BA%A3nh.jpg?s=2048x2048&w=is&k=20&c=xfOQuz3iWADHydmGQ0Z_DpUx2UJc5C4g4MHgTG7TiGw="
                            alt="Hình minh họa cho Hero Section"
                            className="w-full h-auto rounded-xl shadow-2xl object-cover"
                        />
                    </div>
                </div>

                
            </div>
        </section>


    )
}

export default Hero