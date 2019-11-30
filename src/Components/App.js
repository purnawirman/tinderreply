import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Messages from "./Messages";
import Voting from "./Voting";
import { AppBar } from "@material-ui/core";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Voting image={"/static/messages/Snip20191130_25.png"} />
        <Footer />
      </Fragment>
    );
  }
}
