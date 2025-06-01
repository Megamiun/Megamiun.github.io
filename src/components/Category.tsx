import * as React from "react";
import { PropsWithChildren } from "react";

type CategoryProps = PropsWithChildren<{
    id?: string,
    title?: string,
    breakable?: boolean
}>

export default ({id, title, breakable, children}: CategoryProps) =>
    <section id={id} className={`category ${breakable ? "breakable" : ""}`}>
        {title && <p className="category-title">{title}</p>}
        {children}
    </section>
