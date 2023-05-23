import React, { useEffect } from "react";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Resume from "../components/Resume.jsx";
import { useLocation } from "react-router-dom";

export default () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            (async () => {
                await new Promise(res => setTimeout(res, 500));
                const section = document.querySelector(hash);
                section.scrollIntoView({behavior: "smooth", block: "start"});
            })();
        }
    }, []);

    return (
        <div className="content">
            <Home />
            <Projects />
            <Skills />
            <About />
            <Resume />
        </div>
    );
};
