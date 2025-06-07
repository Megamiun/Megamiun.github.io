import React, { ReactNode } from "react";
import { DateDescriptor } from "../helpers/time";
import TimeArrow from "./TimeArrow";

export type TimedRowType = { content: string | ReactNode, date: DateDescriptor };

const TimeRow = ({content, date}: { content: string | ReactNode, date: DateDescriptor }) =>
    <div className="timebox">
        <div className="timeline">
            <TimeArrow date={date}/>
        </div>
        <div className="info">
            <p>{content}</p>
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
        {items.map(row => <TimeRow key={row.content.toString()} content={row.content} date={row.date}/>)}
    </>
