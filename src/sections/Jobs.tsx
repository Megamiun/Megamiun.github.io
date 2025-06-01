import React from "react";
import { Experiences } from "../sources/DataTypes";

interface Experience {
    name: string;
    workedOn: string;
    lessonsLearnt: string;
    technologies: string[];
}

const ExperienceItem = ({experience}: { experience: Experience }) => (
    <section className="category unbreakable">
        <p className="category-title">{experience.name.replace("/", " ")}</p>
        <p className="category-description">
            <b>Worked on</b>: {experience.workedOn}
        </p>

        <p className="category-description">
            <b>Lessons Learnt</b>: {experience.lessonsLearnt}
        </p>

        <p className="category-description">
            <b>Technologies</b>: {experience.technologies.join(", ")}
        </p>
    </section>
);

export default ({data}: { data: Experiences }) =>
    <section className="multi">
        {data.map(experience => <ExperienceItem key={experience.name} experience={experience}/>)}
    </section>
