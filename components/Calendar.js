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
        dayOfMonth: 7,
        dayOfWeek: "Friday",
      },
      {
        key: 36,
        title: "Yet Another Event",
        dayOfMonth: 19,
        dayOfWeek: "Thursday",
      },
      {
        key: 49,
        title: "Another Yet Another Event",
        dayOfMonth: 27,
        dayOfWeek: "Sunday",
      },
      {
        key: 9,
        title: "Finally Another Yet Another Event",
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
