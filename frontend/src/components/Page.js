"use strict";

import React from "react";

import Header from "./Header";
import AppBar from './AppBar';
import { Footer } from "./Footer";

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    this.setState({
      title: document.title,
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppBar title="Car Companion" />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
