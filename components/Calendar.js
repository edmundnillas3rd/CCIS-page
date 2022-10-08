export default function Calendar({ month, children }) {
  return (
    <div className="flex-container calendar-container">
      <h3>Month of {month}</h3>
      <div className="flex-container dates">{children}</div>
    </div>
  );
}
