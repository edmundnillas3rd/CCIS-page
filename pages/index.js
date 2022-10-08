import Head from "next/head";
import Announcements from "../components/Announcements";
import Background from "../components/Background";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>CCIS CJC</title>
        <meta property="og:title" content="CCIS CJC" key="title" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
      </Head>
      <Background>
        <div className="flex-container title-container webpage-title-container">
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
