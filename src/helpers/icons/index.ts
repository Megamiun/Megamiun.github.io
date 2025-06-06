import briefcase from './data/briefcase.svg?react'
import calendar from './data/calendar.svg?react'
import code from './data/code.svg?react'
import document from './data/document.svg?react'
import envelopeClosed from './data/envelope-closed.svg?react'
import fork from './data/fork.svg?react'
import home from './data/home.svg?react'
import linkExternal from './data/link-external.svg?react'
import location from './data/location.svg?react'
import mapMarker from './data/map-marker.svg?react'
import person from './data/person.svg?react'
import phone from './data/phone.svg?react'
import siteQrCode from './data/site-qr-code.svg?react'
import { createElement, FunctionComponent, SVGProps } from "react";

export const Icons = {
    briefcase,
    calendar,
    code,
    document,
    envelopeClosed,
    fork,
    home,
    linkExternal,
    location,
    mapMarker,
    person,
    phone,
    siteQrCode,
} as { [key: string]: FunctionComponent<SVGProps<SVGSVGElement>> }

export const includeSVG = (name: string) => {
    const icon = Icons[name];
    if (!icon) {
        console.warn(`Icon ${name} not found`);
        return null;
    }

    return createElement(icon, {className: "item-icon"})
}
