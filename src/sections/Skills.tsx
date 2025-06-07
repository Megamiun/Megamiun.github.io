import React from "react";
import { Skills } from "../sources/DataTypes";

type SkillItem = { name: string, level: number, textualLevel: string };
type SkillProps = { skill: SkillItem, preferText: boolean };
type SkillTypeProps = { category: { name: string, skills: SkillItem[] }, preferText: boolean, limit?: number };

const Skill = ({skill, preferText}: SkillProps) =>
    <div className={`exp-level ${preferText ? 'textual' : 'visual'}`}>
        <p className="lhs item-title">{skill.name}</p>
        <span className="rhs">
            <p className="textual">{skill.textualLevel}</p>
            <span className="visual">
                {
                        Array.apply(0, Array(5)).map((_, i) => {
                            if (i < skill.level) return <span key={i} className="dot active"></span>
                            else return <span key={i} className="dot"></span>
                        })
                }
            </span>
        </span>
    </div>

const Category = ({category, preferText, limit}: SkillTypeProps) =>
    <section className="category">
        <p className="category-title h2">{category.name}</p>

        {
            category.skills
                .slice(0, limit || category.skills.length)
                .map(skill => <Skill key={skill.name} skill={skill} preferText={preferText} />)
        }
    </section>

export default ({data, preferText, limit}: { data: Skills, preferText?: boolean, limit?: number }) =>
    <section className="multi">
        {
            data.map(category =>
                <Category key={category.name} category={category} preferText={preferText == true} limit={limit} />
            )
        }
    </section>
