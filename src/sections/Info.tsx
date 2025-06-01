import React from "react";
import { includeSVG } from "../helpers/icons";
import { Personal } from "../sources/DataTypes";
import { Link } from "../components/Link";

type InfoProps = { info: { name: string, value: string, icon?: string, url?: string } };

const Item = ({info}: InfoProps) =>
    <div className="block-wrapper" key={info.name}>
        <p className="item-icon">{info.icon && includeSVG(info.icon)}</p>
        <p className="item-title">{info.name}: </p>
        <Link {...info} />
    </div>

export default ({data}: { data: Personal }) =>
    data.map(info => <Item key={info.name} info={info}/>)