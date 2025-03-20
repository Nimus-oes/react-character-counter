export default function Option({ name, id, label, handleChange }) {
  return (
    <>
      <input type="checkbox" name={name} id={id} onChange={handleChange} />{" "}
      {label}
    </>
  );
}
