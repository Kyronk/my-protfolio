import { useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Sidebar from "@/components/sections/Sidebar";
import Projects from "@/components/sections/Projects";

import Skills from "./components/sections/Skills";

import ContactSection from "./components/sections/Contact";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <Sidebar />
            <About />
            <Skills />
            <Projects />
            <ContactSection />
        </ThemeProvider>
    );
}

export default App;
