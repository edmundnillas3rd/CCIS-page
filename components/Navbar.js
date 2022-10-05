import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex-container navbar">
      <li>
        <Link href="/">
          <a className="link link-highlight">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="link link-highlight">About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
