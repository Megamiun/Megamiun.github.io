import React from "react";

import Category from "../components/Category";
import Info from "../sections/Info";
import Academics from "../sections/Academics";
import Certifications from "../sections/Certifications";
import Experiences from "../sections/Experiences";
import Jobs from "../sections/Jobs";
import Skills from "../sections/Skills";

import academics from "../data/academics.json";
import certifications from "../data/certifications.json";
import experiences from "../data/experiences.json";
import skills from "../data/skills.json";
import personal from "../data/personal.json";
import { Icons } from "../helpers/icons";

export default () => <>
    <section id="personal-panel">
        <img id="avatar" className="circle" src="/images/avatar.jpg"/>
        <Icons.siteQrCode id="qr-code" />

        <Category>
            <p id="name" className="category-title">Gabryel<br/>Monteiro</p>
            <p>Back-End Developer, Systems Analyst, Open Source Enthusiast, Strongly Typed.</p>
        </Category>
        <Category id="info-panel" title="Personal"><Info data={personal}/></Category>
    </section>

    <section id="professional-panel">
        <section id="life" className="multi">
            <Category id="education">
                <Category id="academics" title="Academics"><Academics data={academics}/></Category>
                <Category id="certifications" title="Certifications"><Certifications data={certifications}/></Category>
            </Category>
            <Category id="experiences" title="Experiences"><Experiences data={experiences}/></Category>
        </section>
        <Category id="skills" title="Skills"><Skills data={skills}/></Category>
        <Category id="jobs" title="Jobs"><Jobs data={experiences}/></Category>
    </section>

    <section id="small-info-panel">
        <Category title="Personal"><Info data={personal}/></Category>
    </section>
</>
