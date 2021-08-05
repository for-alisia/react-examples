import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }
  componentDidCatch(err) {
    console.log(err);
    this.setState({ error: err });
  }
  render() {
    if (this.state.error !== null) {
      return <div>Something went wrong, sorry</div>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
