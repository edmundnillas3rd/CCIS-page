import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Background>
        <div className="flex-container container">
          <div className="flex-container title-container" role="seperator">
            <h3>College of Computer and Information Science</h3>
            <p>Home Page</p>
          </div>
          <div className="vl"></div>
          <div className="flex-container title-container">
            <p>Ambot lang unsay akong ibutang diri</p>
          </div>
        </div>
      </Background>
    </div>
  );
}
