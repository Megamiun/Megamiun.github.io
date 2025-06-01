import React from "react";

export type Timed = { month?: number, year: number };

export default ({date}: { date?: Timed }) =>
    <div className="date-container">
        <p>{date?.month ? `${date.month}/${date.year}` : date ? date.year : ''}</p>
    </div>
