import React, { useState, Fragment } from "react";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

export default function Credits() {
  const [credits, setCredits] = useState(0);

  return (
    <Fragment>
      Credits: {credits}
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Fragment>
  );
}
