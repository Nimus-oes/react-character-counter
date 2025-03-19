export default function Options() {
  return (
    <div className="options">
      <div className="checkbox-options">
        <div>
          <input
            type="checkbox"
            name="no-space-option"
            aria-label="A checkbox for Exclude Spaces feature"
          />
          Exclude Spaces
        </div>
        <div>
          <input
            type="checkbox"
            name="limit-option"
            aria-label="A checkbox for Set Character Limit feature"
          />
          Set Character Limit
        </div>
      </div>
      <div>Approx. reading time: 0 minute</div>
    </div>
  );
}
