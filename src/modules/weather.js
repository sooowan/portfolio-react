import { handleActions } from 'redux-actions';
import axios from 'axios';

const GET_WEATHER = 'weather/GET_WEATHER';

export const getWeatherApi = () => async (dispatch) => {
  const cityName = 'Seoul';
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=kr`;
  try {
    const res = await axios.get(url);
    dispatch({ type: GET_WEATHER, payload: res.data });
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

const initialState = {
  // maxTemp: 0,
  // minTemp: 0,
  temp: 0,
  desc: '',
  city: '',
  icon: null,
  humidity: 0,
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
    }),
  },
  initialState,
);

export default weather;
