import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to render a fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information to an external service or console
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          {/* You can display a fallback UI or error details here */}
        </div>
      );
    }

    return this.props.children; // If no error, render the children components
  }
}

export default ErrorBoundary;
