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
    const lastPosition = positions[positions.length - 1];

    const start = lastPosition.started;
    const end = positions[0].ended;

    if (!end)
        return `${describeDate(start)} - ongoing`

    return `${describeDate(start)} - ${describeDate(end)}`
}

const ExperienceItem = ({experience}: { experience: Experience }) => (
    <section id={experience.name} className="category job unbreakable">
        <p className="category-title h2">
            {experience.name}
            {experience.via && ` (Via ${experience.via})`}
            <span className="end"><span hidden> - </span>{experience.location}<span hidden> - </span></span>
        </p>

        <p className="category-description">
            <span hidden>{experience.name} - {experience.location} | </span>
            <b>{experience.position[0].name}</b> | {describeDuration(experience)}
        </p>

        <p className="category-description">
            <b>About the company</b>: {experience.about}.
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

    const positionByStartDateDesc = (lhs: Position, rhs: Position) =>
        rhs.started.year - lhs.started.year;

    const positionByEndDateDesc = (lhs: Position, rhs: Position) =>
        rhs.ended.year - lhs.ended.year;

    const byDateDesc = (lhs: Experience, rhs: Experience) => {
        const leftPosition = lhs.position[0]
        const rightPosition = rhs.position[0]

        if (leftPosition.ended == undefined)
            return -1

        if (rightPosition.ended == undefined)
            return 1

        const endSort = positionByEndDateDesc(leftPosition, rightPosition)

        if (endSort != 0)
            return endSort
        
        return positionByStartDateDesc(leftPosition, rightPosition)
    }
    
    const clone = structuredClone(data)

    clone.sort(byDateDesc)
    clone.forEach(experience =>
        experience.position.sort(positionByStartDateDesc)
    )

    return clone;
}

export default ({data}: { data: Experiences }) =>
    <section className="content">
        {
            getSorted(data)
                .map(experience => <ExperienceItem key={experience.name} experience={experience} />)
        }
    </section>
