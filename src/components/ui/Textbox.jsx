export default function Textbox({ handleChange, maxLength }) {
  return (
    <div>
      <textarea
        className="textbox"
        onChange={handleChange}
        maxLength={maxLength}
      ></textarea>
    </div>
  );
}
