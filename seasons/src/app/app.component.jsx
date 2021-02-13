/** Libraries */
import React, { Component } from 'react';
/** Components */
import SeasonDisplay from '../components/season-display/season-display.component';
import Spinner from '../components/spinner/spinner.component';
import Warning from '../components/warning/warning.component';
/** Styles */
import './app.styles.css';

class App extends Component {
  state = {
    latitude: null,
    isLoading: false,
    errorMessage: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    /** Get user's location */
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: { latitude },
        } = position;
        this.setState({ latitude, isLoading: false, errorMessage: null });
      },
      (error) => this.setState({ errorMessage: error.message, isLoading: false })
    );
  }

  renderContent() {
    const { latitude, isLoading, errorMessage } = this.state;

    if (isLoading) {
      return (
        <Spinner size="huge">
          Waiting for getting your geo location (please, allow us to do it)...
        </Spinner>
      );
    }

    if (errorMessage) {
      return <Warning>{errorMessage}</Warning>;
    }

    return <SeasonDisplay lat={latitude} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
