import { useEffect, useState } from "react";
import Background from "../components/Background";
import Calendar from "../components/Calendar";
import Card from "../components/Card";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents((eventArr) => [
      ...eventArr,
      // {
      //   key: 12,
      //   title: "Foundation Day kunuhay",
      //   info: "63rd founding anniversary",
      //   dayOfMonth: 30,
      //   dayOfWeek: "Tuesday",
      // },
      {
        key: 24,
        title: "CCIS Acquiantance Party",
        info: "Acquiantance and Cosplay Event",
        dayOfMonth: 7,
        dayOfWeek: "Friday",
      },
    ]);
  }, []);

  return (
    <div className="home">
      <Background>
        <div className="flex-container title-container head-main-container">
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
      <div className="flex-container announcement-container">
        <h3>Announcements</h3>
        <p>
          Sed vestibulum mollis est, quis sagittis urna porttitor ac. Donec
          volutpat placerat urna, ac aliquet purus sodales eget. Vestibulum
          porta turpis in libero aliquam porta. Duis maximus pharetra nibh, et
          accumsan est facilisis at. In in congue massa. Suspendisse egestas
          vitae nunc et semper. Aliquam hendrerit, tortor non laoreet interdum,
          magna dolor sodales augue, at consequat libero tortor sed dolor. Fusce
          sed ullamcorper ante, in dictum tortor. Ut tincidunt massa feugiat,
          faucibus erat ut, placerat nibh. Aenean nibh tortor, aliquet ut
          dignissim ac, aliquam auctor lectus. Curabitur lobortis, justo sed
          lobortis viverra, mi lacus aliquet nisi, sit amet venenatis turpis
          orci ut ex. Ut nunc odio, egestas eu tempor sed, commodo ac est. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec blandit sit amet dui eu hendrerit.
        </p>
      </div>
    </div>
  );
}
