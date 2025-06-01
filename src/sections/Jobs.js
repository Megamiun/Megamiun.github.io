import React from "react";
const ExperienceItem = ({ experience }) => (React.createElement("section", { className: "category unbreakable" },
    React.createElement("p", { className: "category-title" }, experience.name.replace("/", " ")),
    React.createElement("p", { className: "category-description" },
        React.createElement("b", null, "Worked on"),
        ": ",
        experience.workedOn),
    React.createElement("p", { className: "category-description" },
        React.createElement("b", null, "Lessons Learnt"),
        ": ",
        experience.lessonsLearnt),
    React.createElement("p", { className: "category-description" },
        React.createElement("b", null, "Technologies"),
        ": ",
        experience.technologies.join(", "))));
export default ({ data }) => React.createElement("section", { className: "multi" }, data.map(experience => React.createElement(ExperienceItem, { key: experience.name, experience: experience })));
