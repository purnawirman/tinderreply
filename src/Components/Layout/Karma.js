import React, { useState, Fragment } from "react";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

function getKarma(point) {
  if (point === 10) {
    return "NONE";
  } else if (point < 10) {
    return "LOW";
  } else if (point < 20) {
    return "MEDIUM";
  } else if (point < 30) {
    return "HIGH";
  }
  return "MAX";
}

export default function Karma() {
  const [karma, setKarma] = useState(0);

  return (
    <Fragment>
      Karma: {getKarma(karma)}
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Fragment>
  );
}
