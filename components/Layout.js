import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
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
      <header className="flex-container header">
        <Link href="/">
          <a>
            <Image
              src="/images/ccis-logo.png"
              alt="ccis-logo"
              width={48}
              height={48}
            />
          </a>
        </Link>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
