import { useState, useEffect } from "react";

import { Skill } from ".";
import { devSkills } from "../../constants/skills";

const Skills = () => {
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 87);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 65);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, reactSkill } = devSkills;
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={reactJs}
      />
    </>
  );
};

export default Skills;
