export default function Checkbox({
  id,
  label,
  isChecked,
  handleChange,
  className,
}) {
  return (
    <label className={className}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className="native-checkbox"
      />
      <span className="custom-checkbox"></span>
      {label}
    </label>
  );
}
