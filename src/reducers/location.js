import {
  GET_CURRENT_LOCATION
} from '../actions/types';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA ,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return {
        ...INITIAL_STATE,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    default:
      return state;
  }
}
