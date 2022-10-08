import Layout from "../components/Layout";
import "../style.css";

export default function Website({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
