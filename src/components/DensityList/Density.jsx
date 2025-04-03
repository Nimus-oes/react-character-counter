import "./DensityList.css";

export default function Density({ letter, count, ratio }) {
  return (
    <div className="density">
      <label htmlFor={letter}>{letter}</label>
      <progress
        id={letter}
        value={ratio}
        max="100"
        className="progress"
      ></progress>
      <div>{`${count} (${ratio}%)`}</div>
    </div>
  );
}
