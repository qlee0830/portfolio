import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import { EducationData, WorkData } from "../constants";

import Event from "../shared/components/Event";

export default function History() {
  console.log(EducationData);
  return (
    <div className="history">
      <div className="history-education">
        <h3 className="title">Education</h3>
        <Timeline align="left">
          {EducationData.map(({ name, position, paragraph, timeframe }) => (
            <Event
              name={name}
              position={position}
              timeframe={timeframe}
              paragraph={paragraph}
              isLeft={true}
            />
          ))}
        </Timeline>
      </div>
      <div className="history-work">
        <h3 className="title">Projects</h3>
        <Timeline align="right">
          {WorkData.map(({ name, position, paragraph, timeframe }) => (
            <Event
              name={name}
              position={position}
              timeframe={timeframe}
              paragraph={paragraph}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
}
