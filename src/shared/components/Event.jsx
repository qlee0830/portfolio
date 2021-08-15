import React from "react";
import { Fragment } from "react";

const Event = ({ name, position, timeframe, paragraph }) => {
  return (
    <Fragment className="event">
      <h3 className="event-name">{name}</h3>
      <h4 className="event-position">{position}</h4>
      <div className="event-timeframe">{timeframe}</div>
      <p className="event-paragraph">{paragraph}</p>
    </Fragment>
  );
};

export default Event;
