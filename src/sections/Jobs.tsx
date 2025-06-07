import React from "react";
import { DateDescriptor, describeDate } from "../helpers/time";
import { Experiences } from "../sources/DataTypes";

interface Experience {
    name: string
    via?: string
    about: string
    location: string
    workedOn: string
    lessonsLearnt: string
    bulletPoints: string[]
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
    <section id={experience.name} className="category job">
        <p className="category-title h2">
            {experience.name}
            {experience.via && ` (Via ${experience.via})`}
            <span className="end"><span hidden> - </span>{experience.location}<span hidden> - </span></span>
        </p>

        <p className="category-description">
            {experience.about}.
        </p>

        <p className="category-description">
            <b>{experience.position[0].name}</b> | {describeDuration(experience)}
        </p>

        <p className="category-description">
            <b>Technologies</b>: {experience.technologies.join(", ")}
        </p>

        <ul className="category-description job-description">
            {experience.bulletPoints.map(point => <li key={point}>{point}.</li>)}
        </ul>
    </section>
);

function getSorted(data: Experiences) {
    const byStartDateDesc = (lhs: Experience, rhs: Experience) =>
        rhs.position[0].started.year - lhs.position[0].started.year;

    const positionByStartDateDesc = (lhs: Position, rhs: Position) =>
        rhs.started.year - lhs.started.year;

    const clone = structuredClone(data)

    clone.sort(byStartDateDesc)
    clone.forEach(experience =>
        experience.position.sort(positionByStartDateDesc)
    )

    return clone;
}

export default ({data}: { data: Experiences }) =>
    <section className="multi">
        {
            getSorted(data)
                .map(experience => <ExperienceItem key={experience.name} experience={experience} />)
        }
    </section>
