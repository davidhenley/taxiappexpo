import React, { Component } from 'react';
import { View } from 'native-base';
import { MapView, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    const { region } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={region}
        >
          <MapView.Marker
            coordinate={region}
            pinColor="green"
          />
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = ({ location }) => {
  return { region: location };
};

export default connect(mapStateToProps, actions)(HomeScreen);
