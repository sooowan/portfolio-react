import styled, { css } from 'styled-components';

const WeatherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: var(--bg-lv1);
  border-radius: 12px;
  padding: 24px 54px;
  margin-top: 24px;

  @media (max-width: 768px) {
    padding: 24px 32px;
  }
  .main,
  .side {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .side {
    align-items: flex-end;
  }

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
    gap: 8px;
    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
    .img {
      width: 32px;
      height: 32px;
      border-radius: 25px;
      background: var(--main-bg);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  ${(props) =>
    props.$loading &&
    css`
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      line-height: 1.2rem;
      gap: 8px;
    `}
  .loading {
    /* font-size: 2rem;
    line-height: 2rem; */
    display: inline-block;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    animation: appear 1.5s steps(100);
    animation-iteration-count: infinite;
  }
  @keyframes appear {
    from {
      width: 0;
    }
    to {
      width: 100%;
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
  loading,
}) {
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <>
      {loading ? (
        <WeatherBlock $loading={true}>
          Loading
          <div>
            <span className="loading">• • •</span>
          </div>
        </WeatherBlock>
      ) : (
        <WeatherBlock>
          <div className="main">
            <span className="city">{city}</span>
            <span className="temp">{temp}°</span>
          </div>
          <div className="side">
            <div className="desc">
              <div className="img">
                <img src={imgUrl} alt={desc} />
              </div>
              <p>{desc}</p>
            </div>
            <ul className="data">
              <li>
                <span>습도</span>
                <em>{humidity}%</em>
              </li>
              <li>
                <span>체감</span>
                <em>{feels_like}°</em>
              </li>
            </ul>
          </div>
        </WeatherBlock>
      )}

      {/* <p>{maxTemp}</p>
    <p>{minTemp}</p> */}
    </>
  );
}
