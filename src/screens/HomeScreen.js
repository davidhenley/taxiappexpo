import React, { Component } from 'react';
import { View } from 'native-base';
import { MapView, Location, Permissions } from 'expo';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  state = {
    region: {
      latitude: 36.174465,
      longitude: -86.767960,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  _getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (!status === 'granted') {
      console.error('You must grant location permissions.');
    } else {
      let position = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true
      });
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });
    }
  }

  _onRegionChange = (region) => {
    // console.log('Region changed', region);
  }

  _onRegionChangeComplete = (region) => {
    // console.log('Region change completed', region);
  }

  async componentDidMount() {
    this._getLocation();
  }

  render() {
    const { region } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={region}
          onRegionChange={this._onRegionChange}
          onRegionChangeComplete={this._onRegionChangeComplete}
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HomeScreen);
