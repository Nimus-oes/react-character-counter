export default function Option({ name, id, label, value, handleChange }) {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />{" "}
      {label}
    </div>
  );
}
