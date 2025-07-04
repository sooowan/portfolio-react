import { useDispatch, useSelector } from 'react-redux';
import MyWeather from '../components/widget/MyWeather';
import { useEffect } from 'react';
import { getWeatherApi } from '../modules/weather';

export default function WeatherContainer() {
  const weather = useSelector(({ weather }) => {
    return weather;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherApi());
  }, [dispatch]);
  return (
    <MyWeather
      temp={weather.temp.toFixed(0)}
      // maxTemp={weather.maxTemp.toFixed(0)}
      // minTemp={weather.minTemp.toFixed(0)}
      desc={weather.desc}
      city={weather.city}
      icon={weather.icon}
      humidity={weather.humidity}
      feels_like={weather.feels_like.toFixed(0)}
    />
  );
}
