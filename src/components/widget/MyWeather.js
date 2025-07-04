import styled from 'styled-components';

const WeatherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: var(--bg-lv1);
  border-radius: 12px;
  padding: 24px 32px;
  margin-top: 24px;
  .main {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .temp {
      font-size: 3rem;
      font-weight: 700;
      line-height: 3.4rem;
    }
    .city {
      font-size: 1.4rem;
      line-height: 2rem;
      opacity: 0.7;
    }
  }

  .data {
    display: flex;
    font-size: 1.2rem;
    line-height: 2rem;
    em {
      display: inline-block;
      vertical-align: middle;
      font-style: normal;
      margin-left: 5px;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 1rem;
      line-height: 2rem;
      opacity: 0.5;
    }
    li + li {
      margin-left: 12px;
    }
  }
  .desc {
    display: flex;
    align-items: center;
    background: var(--main-bg);
    border-radius: 25px;
    margin-bottom: 8px;
    img {
      width: 50px;
      height: 50px;
    }
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
  feels_like,
}) {
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <WeatherBlock>
      <div className="main">
        <span className="city">{city}</span>
        <span className="temp">{temp}°C</span>
      </div>
      <div>
        <div className="desc">
          <img src={imgUrl} alt={desc} />
          <p>{desc}</p>
        </div>
        <ul className="data">
          <li>
            <span>습도</span>
            <em>{humidity}%</em>
          </li>
          <li>
            <span>체감</span>
            <em>{feels_like}°C</em>
          </li>
        </ul>
      </div>

      {/* <p>{maxTemp}</p>
    <p>{minTemp}</p> */}
    </WeatherBlock>
  );
}
