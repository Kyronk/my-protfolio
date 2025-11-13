// import path from "path";
// import tailwindcss from "@tailwindcss/vite"

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//     // plugins: [react()],
//     plugins: [react(), tailwindcss()],
//     resolve: {
//         alias: {
//             "@": path.resolve(__dirname, "./src"),
//         },
//     },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
// 

export default defineConfig({
    plugins: [react()],
    resolve: { // 👈 BƯỚC 2: Thêm phần 'resolve'
        alias: {
            '@': path.resolve(__dirname, './src'), // 👈 BƯỚC 3: Định nghĩa alias
        },
    },
});