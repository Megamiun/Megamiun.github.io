import React from "react";
import {createRoot} from 'react-dom/client';
import "../../css/ademar/main.scss"
import Markdown from "react-markdown";

import content from "/ademar.md?url&raw"

const Page = () => {
    return <>
        <article id="text">
            <Markdown>{content}</Markdown>
        </article>
        <article id="images">
            {
                Array.apply(0, Array(10)).map((_, i) =>
                    <a href={`/images/ademar/-${i}.jpg`}><img src={`/images/ademar/-${i}.jpg`}/></a>
                )
            }
            <a href="/images/ademar/-0.jpg"><img src="/images/ademar/-0.jpg"/></a>
        </article>
    </>;
}

createRoot(document.getElementById('root')).render(<Page/>)
