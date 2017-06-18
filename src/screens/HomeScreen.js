import React, { Component } from 'react';
import { View, Header, Icon, Item, Input } from 'native-base';
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
        <Header searchBar rounded style={styles.headerStyle}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Pick Up" />
          </Item>
        </Header>
        <Header searchBar rounded style={styles.headerStyle}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Drop Off" />
          </Item>
        </Header>
        {this.props.region.latitude && (
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
        )}
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    paddingTop: 0,
    height: 40
  }
}

const mapStateToProps = ({ location }) => {
  return { region: location };
};

export default connect(mapStateToProps, actions)(HomeScreen);
