import { handleActions } from 'redux-actions';
import axios from 'axios';
import { finishLoading, startLoading } from './loading';

const GET_WEATHER = 'weather/GET_WEATHER';

export const getWeatherApi = () => async (dispatch) => {
  const cityName = 'Seoul';
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    dispatch(startLoading('weather/GET_WEATHER'));
    const res = await axios.get(url);
    dispatch({ type: GET_WEATHER, payload: res.data });
    // dispatch({ type: GET_WEATHER, payload: res.data });
    // console.log(res.data);
  } catch (e) {
    console.log(e);
  }
  dispatch(finishLoading('weather/GET_WEATHER'));
};

const initialState = {
  // maxTemp: 0,
  // minTemp: 0,
  temp: 0,
  desc: '',
  city: '',
  icon: null,
  humidity: 0,
  feels_like: 0,
};

const weather = handleActions(
  {
    [GET_WEATHER]: (state, { payload }) => ({
      ...state,
      // maxTemp: payload.main.temp_max,
      // minTemp: payload.main.temp_min,
      temp: payload.main.temp,
      desc: payload.weather[0].description,
      city: payload.name,
      icon: payload.weather[0].icon,
      humidity: payload.main.humidity,
      feels_like: payload.main.feels_like,
    }),
  },
  initialState,
);

export default weather;
