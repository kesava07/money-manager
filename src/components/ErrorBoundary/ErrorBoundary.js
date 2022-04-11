import React, { Component } from "react";
import Heading from "../Heading/Heading";

export default class ErrorBoundary extends Component {
  state = {
    isError: false,
  };
  componentDidCatch() {
    this.setState({ isError: true });
  }
  render() {
    const { isError } = this.state;
    if (isError) {
      return (
        <div>
          <Heading
            title="Some thing wen't wrong here!"
            type="h4"
            className="text-danger"
          />
        </div>
      );
    }
    return this.props.children;
  }
}
