import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Sorry!</h1>;
    }

    return this.props.children;
  }
}
