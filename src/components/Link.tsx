import { includeSVG } from "../helpers/icons";
import React from "react";

type LinkProps = { value: string, url?: string };

export const Link = ({value, url}: LinkProps) => {
    if (!url)
        return <>{value}</>

    return <a href={url}>{value} {includeSVG('linkExternal')}</a>
}