import React from "react";
import { CircularProgress, Box, Typography } from "@material-ui/core";

export default function Languages() {
  return (
    <div className="info-general__languages">
      <h3>Languages</h3>
      <div className="lang-box">
        {list.map((item) => (
          <div className="lang">
            <Box position="relative" display="inline-flex">
              <CircularProgress variant="determinate" value={item.percentage} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div">
                  {item.percentage}%
                </Typography>
              </Box>
            </Box>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const list = [
  { name: "Vietnamese", percentage: 100 },
  { name: "English", percentage: 70 },
  { name: "Japanese", percentage: 10 },
];
