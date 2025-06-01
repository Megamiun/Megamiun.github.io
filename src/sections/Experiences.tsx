import React from "react";
import { Timed } from "../components/TimeArrow";
import { Experiences } from "../sources/DataTypes";
import TimeGroup from "../components/TimeGroup";

type PositionProps = { name: string, started: Timed, ended?: Timed };
type ExperienceProps = { place: { name: string, position: PositionProps[] } };

const Job = ({place}: ExperienceProps) => {
    const items = place.position
        .map(position => ({name: position.name, date: position.started}));

    const title = place.name
        .split('/')
        .map(fragment => <>{fragment}<br/></>);
    return <TimeGroup title={title} items={items}/>;
}

export default ({data}: { data: Experiences }) =>
    data.reverse().map(place => <Job key={place.name} place={place}/>)
