import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents((eventArr) => [
      ...eventArr,
      {
        key: 24,
        title: "CCIS Acquiantance Party",
        info: "Acquiantance and Cosplay Event",
        dayOfMonth: 7,
        dayOfWeek: "Friday",
      },
      {
        key: 36,
        title: "Yet Another Event",
        info: "Cause one is never enoughh",
        dayOfMonth: 19,
        dayOfWeek: "Thursday",
      },
      {
        key: 49,
        title: "Another Yet Another Event",
        info: "Another event yet again",
        dayOfMonth: 27,
        dayOfWeek: "Sunday",
      },
      {
        key: 9,
        title: "Finally Another Yet Another Event",
        info: "Yet Another event yet again",
        dayOfMonth: 30,
        dayOfWeek: "Monday",
      },
    ]);
  }, []);
  return (
    <div className="flex-container calendar-container">
      <h3>Month of October</h3>
      <div className="flex-container event-container">
        {events.length !== 0 ? (
          events.map((e) => (
            <Card
              key={e.key}
              title={e.title}
              info={e.info}
              dayOfMonth={e.dayOfMonth}
              dayOfWeek={e.dayOfWeek}
            />
          ))
        ) : (
          <div>There are no events for this month</div>
        )}
      </div>
    </div>
  );
}
