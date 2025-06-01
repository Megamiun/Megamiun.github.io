import React, { ReactNode } from "react";
import TimeArrow, { Timed } from "./TimeArrow";

export type TimedRowType = { name: string, date: Timed };

const TimeRow = ({name, date}: { name: string, date: Timed }) =>
    <div className="timebox">
        <div className="timeline">
            <TimeArrow date={date}/>
        </div>
        <div className="info">
            <p>{name}</p>
        </div>
    </div>

export default ({title, items}: { title: string | ReactNode, items: TimedRowType[] }) =>
    <>
        <div className="timebox title">
            <div className="timeline">
                <TimeArrow/>
            </div>
            <div className="info">
                <p className="item-title">{title}</p>
            </div>
        </div>
        {items.map(row => <TimeRow key={row.name} name={row.name} date={row.date}/>)}
    </>
