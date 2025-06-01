import React from "react";
import { Skills } from "../sources/DataTypes";

type SkillProps = { name: string, level: number };
type SkillTypeProps = { category: { name: string, skills: SkillProps[] }, limit?: number };

const Skill = (skill: SkillProps) =>
    <div className="exp-level">
        <p className="item-title">{skill.name}</p>
        {
            Array.apply(0, Array(5)).map((_, i) => {
                if (i < skill.level) return <span key={i} className="dot active"></span>
                else return <span key={i} className="dot"></span>
            })
        }
    </div>

const Category = ({category, limit}: SkillTypeProps) =>
    <section className="category">
        <p className="category-title">{category.name}</p>

        {
            category.skills
                .slice(0, limit || category.skills.length)
                .map(skill => <Skill key={skill.name} {...skill} />)
        }
    </section>

export default ({data, limit}: { data: Skills, limit?: number }) =>
    <section id="skills" className="multi">
        {data.map(category => <Category key={category.name} category={category} limit={limit}/>)}
    </section>
