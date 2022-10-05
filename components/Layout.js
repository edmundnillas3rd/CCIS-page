import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex-container header">
        <h3 className="title">CCIS</h3>
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
}
