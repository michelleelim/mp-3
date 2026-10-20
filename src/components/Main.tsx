import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Leadership from "../pages/Leadership.tsx";
import Skills from "../pages/Skills";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<div className="education"><Education /></div>} />
                <Route path="/projects" element={<div className="projects"><Projects /></div>} />
                <Route path="/experience" element={<div className="experience"><Experience /></div>} />
                <Route path="/leadership" element={<div className="leadership"><Leadership /></div>} />
                <Route path="/skills" element={<div className="skills"><Skills /></div>} />
            </Routes>
        </main>
    );
}