export default function Density({ letter, bar, value }) {
  return (
    <div className="density-item">
      <div className="item-category">{letter}</div>
      <div className="item-category">{bar}</div>
      <div className="item-category">{value}</div>
    </div>
  );
}
