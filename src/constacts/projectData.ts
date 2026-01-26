import { Project } from "@/dataTypes/type";

const deviconUrl = (tech: string, variant: string = 'original') => {
    return `https://devicon-website.vercel.app/api/${tech}/${variant}.svg`;
}

export const projectData: Project[] = [
    {
        id: 1,
        title: "Social Media V1",
        tech: [
            { id: 1, title: 'React', logo: deviconUrl('react'), color: '#61DAFB' },
            { id: 2, title: 'TailwindCSS', logo: deviconUrl('tailwindcss', 'plain'), color: '#000' },
            { id: 3, title: 'Asp.net core', logo: deviconUrl('dotnetcore'), color: '#000' },
            { id: 4, title: 'Postgresql', logo: deviconUrl('postgresql'), color: '#000000' },
            { id: 5, title: 'Docker', logo: deviconUrl('docker'), color: '#000000' },

            // { id: 5, title: 'MongoDB', logo: deviconUrl('mongodb'), color: '#47A248' },
        ],
        image: [
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404397/demo_Cv_2025/5/Screenshot_2026-01-26_120646_kyzsep.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404398/demo_Cv_2025/5/Screenshot_2026-01-26_120916_hhvobc.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404398/demo_Cv_2025/5/Screenshot_2026-01-26_120805_ikulkb.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404398/demo_Cv_2025/5/Screenshot_2026-01-26_120840_uigili.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404398/demo_Cv_2025/5/Screenshot_2026-01-26_120945_isij29.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404399/demo_Cv_2025/5/Screenshot_2026-01-26_121005_p0criw.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1769404400/demo_Cv_2025/5/Screenshot_2026-01-26_120713_ey1r0a.png"
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204419_uizjiw.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204005_cdrpwl.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_203811_cua3km.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204114_kixmkf.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204242_ngauyl.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204157_dk3wbm.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204157_dk3wbm.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204419_uizjiw.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204735_dfmhfe.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204516_k7psxq.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204625_cjvhlj.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204735_dfmhfe.png",
            // "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204659_meqeeo.png"

        ],
        description: "",
        link: "https://gitlab.com/react9750409/project_react_social_v1",
        demo: "https://project-react-social-v1-frontend-re.vercel.app/"
    },
    {
        id: 2,
        title: "E-Commerce Clone",
        tech: [
            { id: 1, title: 'React', logo: deviconUrl('react'), color: '#61DAFB' },
            { id: 2, title: 'TailwindCSS', logo: deviconUrl('tailwindcss', 'plain'), color: '#06B6D4' },
            { id: 3, title: 'Node.js', logo: deviconUrl('nodejs'), color: '#339933' },
            { id: 4, title: 'Express', logo: deviconUrl('express'), color: '#000000' },
            { id: 5, title: 'MongoDB', logo: deviconUrl('mongodb'), color: '#47A248' },
        ],
        image: [
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204419_uizjiw.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204005_cdrpwl.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_203811_cua3km.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204114_kixmkf.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204242_ngauyl.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204157_dk3wbm.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204157_dk3wbm.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960532/demo_Cv_2025/1/Screenshot_2025-11-12_204419_uizjiw.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204735_dfmhfe.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204516_k7psxq.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204625_cjvhlj.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960534/demo_Cv_2025/1/Screenshot_2025-11-12_204735_dfmhfe.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960533/demo_Cv_2025/1/Screenshot_2025-11-12_204659_meqeeo.png"

        ],
        description: "Một trang web e-commerce nhân bản theo giao diện trang bán hàng điện tử, công nghệ, sử dụng MERN stack (MongoDB, Express, React, Node.js) và TailwindCSS.",
        link: "https://github.com/Kyronk/e-commerce-tgdd-",
        // không có demo
    },

    {
        id: 3,
        title: "React Shop",
        tech: [
            { id: 1, title: 'TypeScript', logo: deviconUrl('typescript'), color: '#3178C6' },
            { id: 2, title: 'React', logo: deviconUrl('react'), color: '#61DAFB' },
            { id: 3, title: 'TailwindCSS', logo: deviconUrl('tailwindcss', 'plain'), color: '#06B6D4' },
            { id: 4, title: 'Redux', logo: deviconUrl('redux'), color: '#764ABC' },
        ],
        image: [
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960822/demo_Cv_2025/2/Screenshot_2025-11-12_213344_crcaec.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960822/demo_Cv_2025/2/Screenshot_2025-11-12_213415_b0zjsn.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960822/demo_Cv_2025/2/Screenshot_2025-11-12_213438_jaeeps.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960823/demo_Cv_2025/2/Screenshot_2025-11-12_213458_bphkva.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960823/demo_Cv_2025/2/Screenshot_2025-11-12_213513_juwa9o.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960824/demo_Cv_2025/2/Screenshot_2025-11-12_213550_idbtj5.png",
        ],
        description: "Một trang web cửa hàng (shop) đơn giản, tập trung vào việc quản lý state phức tạp bằng Redux Toolkit và xây dựng giao diện bằng TypeScript.",
        link: "https://gitlab.com/react9750409/react_1",
        demo: "https://react-1-k005is9la-kyronks-projects.vercel.app/",
    },
    {
        id: 4,
        title: "My Anime List",
        tech: [
            { id: 1, title: 'TypeScript', logo: deviconUrl('typescript'), color: '#3178C6' },
            { id: 2, title: 'React', logo: deviconUrl('react'), color: '#61DAFB' },
            { id: 3, title: 'TailwindCSS', logo: deviconUrl('tailwindcss', 'plain'), color: '#06B6D4' },
        ],
        image: [
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960925/demo_Cv_2025/3/Screenshot_2025-11-12_214012_cx4vhj.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960926/demo_Cv_2025/3/Screenshot_2025-11-12_214055_mmus7z.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960926/demo_Cv_2025/3/Screenshot_2025-11-12_214114_mdnahu.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960927/demo_Cv_2025/3/Screenshot_2025-11-12_214141_jqqllp.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960928/demo_Cv_2025/3/Screenshot_2025-11-12_214218_khgmwf.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960929/demo_Cv_2025/3/Screenshot_2025-11-12_214237_bxv2k6.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762960930/demo_Cv_2025/3/Screenshot_2025-11-12_214257_llfrc5.png"
        ],
        description: "Một ứng dụng cá nhân để theo dõi danh sách anime yêu thích, được xây dựng hoàn toàn bằng React và TypeScript, giao diện với TailwindCSS.",
        link: "https://gitlab.com/react9750409/myalist_1",
        demo: "https://myalist-1-pgftbtdaf-kyronks-projects.vercel.app/"
    },

    {
        id: 5,
        title: "Zillow Mini Clone",
        tech: [
            { id: 1, title: 'React', logo: deviconUrl('react'), color: '#61DAFB' },
            { id: 2, title: 'JavaScript', logo: deviconUrl('javascript'), color: '#F7DF1E' },
            { id: 3, title: 'Node.js', logo: deviconUrl('nodejs'), color: '#339933' },
            { id: 4, title: 'Express', logo: deviconUrl('express'), color: '#000000' },
            { id: 5, title: 'MySQL', logo: deviconUrl('mysql'), color: '#4479A1' },
        ],
        image: [
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961060/demo_Cv_2025/4/Screenshot_2025-11-12_204810_n7lzo7.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961061/demo_Cv_2025/4/Screenshot_2025-11-12_204914_h6kd03.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961062/demo_Cv_2025/4/Screenshot_2025-11-12_204942_vlfv7r.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961063/demo_Cv_2025/4/Screenshot_2025-11-12_205019_poc681.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961064/demo_Cv_2025/4/Screenshot_2025-11-12_205045_vwvivb.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961066/demo_Cv_2025/4/Screenshot_2025-11-12_205115_jrfsag.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961066/demo_Cv_2025/4/Screenshot_2025-11-12_205147_cn65tu.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961068/demo_Cv_2025/4/Screenshot_2025-11-12_205205_jhxcy6.png",
            "https://res.cloudinary.com/dvpu9sc4z/image/upload/v1762961069/demo_Cv_2025/4/Screenshot_2025-11-12_205230_kvct09.png"
        ],
        description: "Một dự án full-stack nhân bản trang web bất động sản Zillow. Xây dựng bằng React, Node.js, Express và cơ sở dữ liệu MySQL.",
        link: "https://github.com/Kyronk/zillow_mini_full",
    }
];