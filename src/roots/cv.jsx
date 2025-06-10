import React from "react";
import { createRoot } from 'react-dom/client';

import Category from "../components/Category";

import Academics from "../sections/Academics";
import Certifications from "../sections/Certifications";
import Highlights from "../sections/Highlights";
import Skills from "../sections/Skills";
import Info from "../sections/Info";
import Jobs from "../sections/Jobs";

import personal from "../data/personal.json";
import academics from "../data/academics.json";
import certifications from "../data/certifications.json";
import highlights from "../data/highlights.json";
import experiences from "../data/experiences.json";
import skills from "../data/skills.json";

import env from "../data/variables.yaml"

import "../css/main.scss"
import "../css/category.scss"
import "../css/sections.scss"
import "../css/screen.scss"
import "../css/print.scss"
import "../css/colors.scss"

createRoot(document.getElementById('root')).render(
    <>
        <section id="personal-panel">
            <Category id="about-panel">
                <p id="name" className="category-title">Gabryel Monteiro</p>
                {env.description.map(line => <p key={line}>{line}</p>)}
            </Category>
            <Category id="info-panel" title="Personal"><Info data={personal}/></Category>
        </section>

        <section id="professional-panel">
            <section id="life" className="multi">
                <Category id="academics" title="Academics"><Academics data={academics}/></Category>
                <Category id="certifications" title="Certifications"><Certifications data={certifications}/></Category>
            </section>
            <Category id="skills" title="Skills"><Skills data={skills} preferText limit={8} /></Category>
            <Category id="jobs" title="Experience"><Jobs data={experiences}/></Category>
            <Category id="extras" title="Highlights"><Highlights data={highlights}/></Category>
        </section>
    </>
)
