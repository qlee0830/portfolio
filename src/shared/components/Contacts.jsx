import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function contacts() {
  return (
    <div className="info-contacts">
      {list.map((item) => (
        <a href="">{item}</a>
      ))}
    </div>
  );
}

const list = [
  <LinkedInIcon />,
  <GitHubIcon />,
  <FacebookIcon />,
  <TwitterIcon />,
];
