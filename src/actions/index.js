import {
  GET_CURRENT_LOCATION,
  CHANGE_PICK_UP,
  CHANGE_DROP_OFF
} from './types';
import { Location, Permissions } from 'expo';
import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyDA6Ob7VCHJYiO72Cfb4X1r_hTh6szWp0g';
const GOOGLE_ROOT = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';

// Location Actions
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

// Querying Location Actions
export const searchPlaces = (location, text) => async dispatch => {
  let { data: { results } } = await axios.get(`${GOOGLE_ROOT}query=${text}&location=${location.latitude},${location.longitude}&key=${GOOGLE_API_KEY}`);
  console.log(results);
  return {
    type: 'CHANGE_PICK_UP',
    payload: null
  }
}
