import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Typography } from '@material-ui/core';

export default function CircularProgressItem({ item }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value < item.percentage) {
      setValue(value + 1);
    }
  }, [value]);

  return (
    <div className="lang">
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={value} />
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
            {Math.round(value)}%
          </Typography>
        </Box>
      </Box>
      <p>{item.name}</p>
    </div>
  );
}
