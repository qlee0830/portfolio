import React from "react";
import LinearProgressItem from "./../../../components/LinearProgressItem";

export default function CodingSkills() {
  return (
    <div className="info-general__skills">
      <h3>Coding</h3>
      <div className="content">
        {list.map((item) => (
          <LinearProgressItem item={item} />
        ))}
      </div>
    </div>
  );
}

const list = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 50 },
  { name: "JavaScript", percentage: 70 },
  { name: "React", percentage: 50 },
];
