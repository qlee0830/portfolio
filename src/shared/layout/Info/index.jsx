/**
 * Info component
 *
 * @author Anh Tu Le <anh.le@vertics.co>
 *
 * @copyright Vertics Oy 2021
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import BasicInfo from "./components/BasicInfo";
import Languages from "./components/Languages";
import CodingSkills from "./components/CodingSkills";
import Contacts from "../../components/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));
export default function Info() {
  const classes = useStyles();
  return (
    <div className="info">
      <div className="info-badge">
        <Avatar
          className={classes.large}
          alt="Remy Sharp"
          src="https://cdn.vox-cdn.com/thumbor/8euwZ9X8Mp64tTAbF3AxZdb_NG4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22657276/1322729766.jpg"
        />
        <h3>Quoc Ly</h3>
        <span>Full-stack developer</span>
      </div>
      <div className="info-general">
        <BasicInfo />
        <hr />
        <Languages />
        <hr />
        <CodingSkills />
      </div>
      <Contacts />
    </div>
  );
}
