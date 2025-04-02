import "./DensityList.css";

export default function Density({ letter, bar, ratio }) {
  return (
    <div className="density">
      <div>{letter}</div>
      <div>{bar}</div>
      <div>{ratio}</div>
    </div>
  );
}
