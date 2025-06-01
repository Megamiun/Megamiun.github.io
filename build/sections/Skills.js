import React from "react";
const Skill = (skill) => React.createElement("div", { className: "exp-level" },
    React.createElement("p", { className: "item-title" }, skill.name),
    Array.apply(0, Array(5)).map((_, i) => {
        if (i < skill.level)
            return React.createElement("span", { key: i, className: "dot active" });
        else
            return React.createElement("span", { key: i, className: "dot" });
    }));
const Category = ({ category }) => React.createElement("section", { className: "category" },
    React.createElement("p", { className: "category-title" }, category.name),
    category.skills.map(skill => React.createElement(Skill, Object.assign({ key: skill.name }, skill))));
export default ({ data }) => React.createElement("section", { id: "skills", className: "multi" }, data.map(category => React.createElement(Category, { key: category.name, category: category })));
