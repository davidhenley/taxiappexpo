import {
  GET_CURRENT_LOCATION
} from './types';
import { Location, Permissions } from 'expo';

export const getCurrentLocation = () => async dispatch => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (!status === 'granted') {
    console.error('You must grant location permissions.');
  } else {
    let { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    });
    dispatch({
      type: GET_CURRENT_LOCATION,
      payload: { latitude, longitude }
    });
  }
};
