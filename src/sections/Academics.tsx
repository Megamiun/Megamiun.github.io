import React from "react";
import { Academics } from "../sources/DataTypes";
import TimeGroup from "../components/TimeGroup";

export default ({data}: { data: Academics }) =>
    data.reverse().map(info =>
        <TimeGroup key={info.name}
                   title={info.name}
                   items={[{content: `${info.level} in ${info.class}`, date: {year: info.started}}]}/>
    )
