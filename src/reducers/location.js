import {
  GET_CURRENT_LOCATION
} from '../actions/types';

const INITIAL_STATE = {
  latitude: 36.174465,
  longitude: -86.767960,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
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
