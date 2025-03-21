export default function Inputbox({ className, handleChange }) {
  return (
    <div>
      <input onChange={handleChange} className={className}></input>
    </div>
  );
}
