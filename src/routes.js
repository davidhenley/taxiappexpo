import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="home" hideNavBar={true} component={HomeScreen} />
      </Router>
    );
  }
}

export default RouterComponent;
