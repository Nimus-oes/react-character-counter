export default function Option({ name, id, label }) {
  return (
    <div>
      <input type="checkbox" name={name} id={id} /> {label}
    </div>
  );
}
