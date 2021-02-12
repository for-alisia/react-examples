import React, { Component } from 'react';

import SeasonDisplay from '../components/season-display/season-display.component';
import './app.styles.css';

class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    isLoading: false,
    errorMessage: null,
  };

  componentDidMount() {
    console.log('Component did mount');
    this.setState({ isLoading: true });
    /** Get user's location */
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: { latitude, longitude },
        } = position;
        this.setState({ latitude, longitude, isLoading: false, errorMessage: null });
      },
      (error) => this.setState({ errorMessage: error.message, isLoading: false })
    );
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  render() {
    const { latitude, longitude, isLoading, errorMessage } = this.state;

    console.log('Rendered');

    if (isLoading) {
      return <div>Loading your geo position</div>;
    }

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <>
        <div>
          <div>Latitude: {latitude}</div>
          <div>Longitude: {longitude}</div>
        </div>
        <SeasonDisplay />
      </>
    );
  }
}

export default App;
