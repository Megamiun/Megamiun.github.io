import * as React from "react";
import { PropsWithChildren } from "react";

type CategoryProps = PropsWithChildren<{
    id?: string
    title?: string
    unbreakable?: boolean
    multi?: boolean
    headingLevel?: number
}>

export default ({id, title, unbreakable, multi, headingLevel, children}: CategoryProps) =>
    <section id={id} className={`category ${unbreakable ? "unbreakable" : ""} ${multi ? "multi" : ""}`}>
        {title && <p className={`category-title h${headingLevel ? headingLevel : 1}`}>{title}</p>}
        {children}
    </section>
