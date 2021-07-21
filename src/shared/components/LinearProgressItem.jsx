import React, { useState, useEffect } from "react";
import { LinearProgress, Box } from "@material-ui/core";

export default function LinearProgressItem({ item }) {
  const [value, setValue] = useState(true);
  useEffect(() => {
    if (value < item.percentage) {
      setValue(value + 0.1);
    }
  }, [value]);

  return (
    <div className="linear-progress-item">
      <div className="skill-heading">
        <h5>{item.name}</h5>
        <span>{Math.round(value)}</span>
      </div>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
      </Box>
    </div>
  );
}
