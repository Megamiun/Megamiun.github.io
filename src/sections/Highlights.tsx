import React from "react";
import {Highlights} from "../sources/DataTypes";
import {Link} from "../components/Link";
import {includeSVG} from "../helpers/icons";

type Highlight = { title: string, url?: string, description: string, icon: string };

const HighlightSection = ({ highlight }: {highlight: Highlight}) =>
    <section className="category">
        <p className="category-title h2">
            <span>
                <span className="item-icon">{includeSVG(highlight.icon)}</span>
                <Link value={highlight.title} url={highlight.url} />
            </span>
            {
                highlight.location != undefined ?
                    <span>@ {highlight.location}</span>:
                    <span>@ Personal</span>
            }
        </p>
        <p>{highlight.description}.</p>
    </section>

export default ({ data }: { data: Highlights }) =>
    <section className="multi">
        {
            data.map(highlight =>
                <HighlightSection key={highlight.title} highlight={highlight} />
            )
        }
    </section>
