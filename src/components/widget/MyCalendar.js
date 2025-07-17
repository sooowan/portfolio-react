import Calendar from 'react-calendar';
import '../../styles/MyCalendar.scss';
import moment from 'moment';
import { useEffect, useState } from 'react';

export function MyCalendar() {
  const date = new Date();
  return (
    <div className="my-calendar-wrap">
      <Calendar
        value={date}
        calendarType="gregory"
        prevLabel={null}
        prev2Label={null}
        nextLabel={null}
        next2Label={null}
        showNeighboringMonth={true}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month"
        formatDay={(locale, date) => moment(date).format('DD')}
      />
    </div>
  );
}

export function CurrentTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours = format(date.getHours());
  const minutes = format(date.getMinutes());
  const seconds = format(date.getSeconds());

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const koreanDayOfWeek = days[dayOfWeek];

  const formatDate = `${hours}:${minutes}:${seconds}`;
  const [runningTime, setRunningTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRunningTime(formatDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [formatDate]);
  return (
    <p className="my-calendar-date">
      <span>
        {year}년 {month}월 {day}일 {koreanDayOfWeek}요일
      </span>
      <span className="bg">{runningTime}</span>
    </p>
  );
}

function format(num) {
  return num < 10 ? '0' + num : num.toString();
}
