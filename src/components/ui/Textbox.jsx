export default function Textbox({ handleChange, maxLength }) {
  return (
    <div>
      <textarea onChange={handleChange} maxLength={maxLength}></textarea>
    </div>
  );
}
