export default function Options() {
  return (
    <div className="options">
      <div className="checkbox-options">
        <div>
          <input
            type="checkbox"
            aria-label="A checkbox for Exclude Spaces feature"
          />
          Exclude Spaces
        </div>
        <div>
          <input
            type="checkbox"
            aria-label="A checkbox for Set Character Limit feature"
          />
          Set Character Limit
        </div>
      </div>
      <div>Approx. reading time: 0 minute</div>
    </div>
  );
}
