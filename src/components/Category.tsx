import * as React from "react";
import { PropsWithChildren } from "react";

type CategoryProps = PropsWithChildren<{
    id?: string
    title?: string
    breakable?: boolean
    multi?: boolean
    headingLevel?: number
}>

export default ({id, title, breakable, multi, headingLevel, children}: CategoryProps) =>
    <section id={id} className={`category ${breakable ? "breakable" : ""} ${multi ? "multi" : ""}`}>
        {title && <p className={`category-title h${headingLevel ? headingLevel : 1}`}>{title}</p>}
        {children}
    </section>
