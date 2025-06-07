import React from "react";
import {Highlights, Skills} from "../sources/DataTypes";
import {Link} from "../components/Link";
import {includeSVG} from "../helpers/icons";

type Highlight = { title: string, url?: string, description: string, icon: string };

const HighlightSection = ({ highlight }: {highlight: Highlight}) =>
    <section className="category">
        <p className="category-title h2">
            <span className="item-icon">{includeSVG(highlight.icon)}</span>
            <Link value={highlight.title} url={highlight.url} />
        </p>
        <p>{highlight.description}.</p>
    </section>

export default ({ data }: { data: Highlights }) =>
    <section className="multi-grid">
        {
            data.map(highlight =>
                <HighlightSection key={highlight.title} highlight={highlight} />
            )
        }
    </section>
