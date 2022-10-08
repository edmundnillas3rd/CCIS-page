import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import logo from "../public/images/ccis-logo.png";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex-container header">
        <Link href="/">
          <a>
            <Image src={logo} alt="ccis-logo" width={48} height={48} />
          </a>
        </Link>
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
}
