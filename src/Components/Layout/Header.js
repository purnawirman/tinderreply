import React, { Fragment } from "react";
import TopHeader from "./TopHeader";
import Karma from "./Karma";
import Credits from "./Credits";
import GetCredits from "./GetCredits";

export default function Header() {
  return (
    <Fragment>
      <TopHeader />
      <Karma />
      <Credits />
      <GetCredits />
    </Fragment>
  );
}
