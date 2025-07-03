import styled from 'styled-components';

const WeatherBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-lv1);
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  .top {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .city {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin-right: 12px;
  }
  .data {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 12px;
    em {
      font-weight: 700;
      font-style: normal;
      color: var(--oc-grape-5);
    }
    span + span {
      margin-left: 12px;
    }
  }
  .img {
    width: 50px;
    height: 50px;
  }
`;

export default function MyWeather({
  temp,
  // maxTemp,
  // minTemp,
  desc,
  city,
  icon,
  humidity,
}) {
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <WeatherBlock>
      <div className="top">
        <div className="city">{city}</div>
        <img className="img" src={imgUrl} alt={desc} />
      </div>
      <p>{desc}</p>
      <div className="data">
        <span>
          온도: <em>{temp}°C</em>
        </span>
        <span>
          습도: <em>{humidity}%</em>
        </span>
      </div>

      {/* <p>{maxTemp}</p>
    <p>{minTemp}</p> */}
    </WeatherBlock>
  );
}
