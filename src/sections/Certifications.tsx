import React from "react";
import { Certifications } from "../sources/DataTypes";
import { Link } from "../components/Link";
import TimeGroup from "../components/TimeGroup";

export default ({data}: { data: Certifications }) =>
    data.reverse().map(info =>
        <TimeGroup key={info.name}
                   title={info.technology}
                   items={[{content: <Link value={info.name} url={info.url}/>, date: info.date}]}/>
    )
