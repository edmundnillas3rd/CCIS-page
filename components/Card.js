export default function Card({ title, info, dayOfMonth, dayOfWeek }) {
  return (
    <div className="flex-container card-container">
      <div className="flex-container title-container left-card-content">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className="vl"></div>
      <div className="flex-container title-container right-card-content">
        <h6>{dayOfMonth}</h6>
        <p>{dayOfWeek}</p>
      </div>
    </div>
  );
}
