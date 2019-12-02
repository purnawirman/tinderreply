import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Messages from "./Messages";
import Voting from "./Voting";
import { AppBar } from "@material-ui/core";
import {comments, images} from "./store"
import {BrowserRouter, Route}

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Voting comments={comments} />
        <Footer />
      </Fragment>
    );
  }
}
