import React from "react";

import { LinearProgress, Box } from "@material-ui/core";

export default function CodingSkills() {
  return (
    <div className="info-general__skills">
      <h3>Coding</h3>
      <div className="content">
        {list.map((item) => (
          <div className="skill">
            <div className="skill-details">
              <h5>{item.name}</h5>
              <span>{item.percentage}</span>
            </div>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={item.percentage} />
              </Box>
            </Box>
          </div>
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
