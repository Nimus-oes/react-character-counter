export default function Graph(props) {
  const bar = "Some bar";
  return (
    <div className="density-item">
      <div>{props.letter}</div>
      <div>{bar}</div>
      <div>
        {props.count}({props.percent}%)
      </div>
    </div>
  );
}
