export default function Graph(props) {
  const bar = "Some bar";
  return (
    <div className="density-item">
      <div className="letter">{props.letter}</div>
      <div className="bar">{bar}</div>
      <div className="percentage">
        {props.count} ({props.percent}%)
      </div>
    </div>
  );
}
