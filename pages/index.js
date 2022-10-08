import Announcements from "../components/Announcements";
import Background from "../components/Background";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <div className="home">
      <Background>
        <div className="flex-container title-container head-main-container">
          <h3>Cor Jesu College of Digos City</h3>
          <h3>College of Computer and Information Science</h3>
          <p>Home Page</p>
        </div>
      </Background>
      <Calendar />
      <Announcements />
    </div>
  );
}
