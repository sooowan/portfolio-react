import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/MyCalendar.scss';
import moment from 'moment';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return (
    <div className="my-calendar-wrap">
      <p className="date">
        오늘은
        <span>
          {year}년 {month}월 {day}일
        </span>
        입니다.
      </p>
      <Calendar
        onChange={onChange}
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

export default MyCalendar;
