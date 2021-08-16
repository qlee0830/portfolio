import React from "react";

import Timeline from "@material-ui/lab/Timeline";

import Event from "../shared/components/Event";
import data from "../shared/components/HistoryData";

export default function History() {
  return (
    <div className="history">
      <div className="history-education">
        <h3 className="title">Education</h3>
        <Timeline align="left">
          <Event
            name={data[0].name}
            position={data[0].position}
            timeframe={data[0].timeframe}
            paragraph={data[0].paragraph}
            isLeft={true}
          />
          <Event
            name={data[1].name}
            position={data[1].position}
            timeframe={data[1].timeframe}
            paragraph={data[1].paragraph}
            isLeft={true}
          />
          <Event
            name={data[2].name}
            position={data[2].position}
            timeframe={data[2].timeframe}
            paragraph={data[2].paragraph}
            isLeft={true}
          />
        </Timeline>
      </div>
      <div className="history-work">
        <h3 className="title">Work History</h3>
        <Timeline align="right">
          <Event
            name={data[3].name}
            position={data[3].position}
            timeframe={data[3].timeframe}
            paragraph={data[3].paragraph}
          />
          <Event
            name={data[4].name}
            position={data[4].position}
            timeframe={data[4].timeframe}
            paragraph={data[4].paragraph}
          />
          <Event
            name={data[5].name}
            position={data[5].position}
            timeframe={data[5].timeframe}
            paragraph={data[5].paragraph}
          />
          <Event
            name={data[6].name}
            position={data[6].position}
            timeframe={data[6].timeframe}
            paragraph={data[6].paragraph}
          />
        </Timeline>
      </div>
    </div>
  );
}
