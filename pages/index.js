import { useEffect, useState } from "react";
import Background from "../components/Background";
import Calendar from "../components/Calendar";
import Card from "../components/Card";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents((eventArr) => [
      ...eventArr,
      {
        key: 12,
        title: "Foundation Day kunuhay",
        info: "Lorem ipsum dolor sit amet",
        dayOfMonth: 4,
        dayOfWeek: "Tuesday",
      },
      {
        key: 24,
        title: "CCIS Event",
        info: "Aliquam aliquam orci sed erat scelerisque varius",
        dayOfMonth: 8,
        dayOfWeek: "Saturday",
      },
    ]);
  }, []);

  return (
    <div className="home">
      <Background>
        <div className="flex-container title-container head-main-content">
          <h3>Cor Jesu College of Digos City</h3>
          <h3>College of Computer and Information Science</h3>
          <p>Home Page</p>
        </div>
      </Background>
      <Calendar month={"October"}>
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
      </Calendar>
    </div>
  );
}
