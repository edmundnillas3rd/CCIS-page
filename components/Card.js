export default function Card({ title, subheading, info }) {
  return (
    <div className="flex-container card-container">
      <div className="flex-container title-container" role="seperator">
        <h3>{title}</h3>
        <p>{subheading}</p>
      </div>
      <div className="vl"></div>
      <div className="flex-container title-container">
        <p>{info}</p>
      </div>
    </div>
  );
}
