import React from "react";
import { DateDescriptor, describeDate } from "../helpers/time";
import { Experiences } from "../sources/DataTypes";

interface Experience {
    name: string
    via?: string
    location: string
    workedOn: string
    lessonsLearnt: string
    technologies: string[]
    position: Position[]
}

interface Position {
    name: string
    started: DateDescriptor
    ended?: DateDescriptor
}

const describeDuration = (experience: Experience) => {
    const positions = experience.position;
    const start = positions[0].started;

    const lastPosition = positions[positions.length - 1];
    const end = lastPosition.ended;

    if (!end)
        return `${describeDate(start)} - ongoing`

    return `${describeDate(start)} - ${describeDate(end)}`
}

const ExperienceItem = ({experience}: { experience: Experience }) => (
    <section className="category unbreakable">
        <p className="category-title">
            {experience.name}
            {experience.via && ` (Via ${experience.via})`}
            <span className="end">{experience.location}</span>
        </p>

        <p className="category-description">
            <b>As</b>: {experience.position[0].name}
        </p>

        <p className="category-description">
            <b>During</b>: {describeDuration(experience)}
        </p>

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
        {data.map(experience => <ExperienceItem key={experience.name} experience={experience} />)}
    </section>
