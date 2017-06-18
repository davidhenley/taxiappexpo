import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="home" title="Home" component={HomeScreen} style={styles.scene} />
      </Router>
    );
  }
}

const styles = {
  scene: {
    paddingTop: 64
  }
}

export default RouterComponent;
