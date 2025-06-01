import React from "react";
import TimeGroup from "../components/TimeGroup";
import { DateDescriptor } from "../helpers/time";
import { Experiences } from "../sources/DataTypes";

type PositionProps = { name: string, started: DateDescriptor, ended?: DateDescriptor };
type ExperienceProps = { place: { name: string, via?: string, position: PositionProps[] } };

const Job = ({place}: ExperienceProps) => {
    const items = place.position
        .reverse()
        .map(position => ({ content: position.name, date: position.started }));

    const title = <>
        {place.name}
        {place.via && <><br/>(Via {place.via})</>}
    </>
    return <TimeGroup title={title} items={items}/>;
}

export default ({data}: { data: Experiences }) =>
    data.reverse().map(place => <Job key={place.name} place={place}/>)
