import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Book A Ride",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
