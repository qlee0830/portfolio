import React from "react";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Event = ({ name, position, timeframe, paragraph, isLeft }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className="event">
          <h3 className="event-name">{name}</h3>
          <div className="event-header">
            <h4 className="position">{position}</h4>
            <div className="timeframe">{timeframe}</div>
          </div>
          <p className="event-paragraph">{paragraph}</p>
          <div className={`event-arrow ${isLeft ? "left" : "right"}`}></div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Event;
