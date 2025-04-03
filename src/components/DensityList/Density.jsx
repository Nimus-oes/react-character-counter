import "./DensityList.css";

export default function Density({ letter, count, ratio }) {
  return (
    <div className="density">
      <label htmlFor={letter} className="letter">
        {letter}
      </label>
      <progress
        id={letter}
        value={ratio}
        max="100"
        className="progress"
      ></progress>
      <div className="ratio">{`${count} (${ratio}%)`}</div>
    </div>
  );
}
