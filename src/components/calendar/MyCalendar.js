import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // CSS 파일 import

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} maxDetail="month" />
      {/* <p>선택된 날짜: {date.toLocaleDateString()}</p> */}
    </div>
  );
}

export default MyCalendar;
