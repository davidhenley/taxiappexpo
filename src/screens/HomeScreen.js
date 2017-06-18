import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  render() {
    const { region } = this.state;

    return (
      <View style={styles.container}>
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

const styles = {
  container: {
    flex: 1
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HomeScreen);
