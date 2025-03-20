export default function Option({ name, id, label, handleChange }) {
  return (
    <div className="option-item">
      <input type="checkbox" name={name} id={id} onChange={handleChange} />
      {label}
    </div>
  );
}
