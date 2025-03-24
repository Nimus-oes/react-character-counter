export default function Textbox({
  handleChange,
  maxLength,
  uiClass,
  focusClass,
}) {
  return (
    <div>
      <textarea
        className={`${uiClass} ${focusClass}`}
        onChange={handleChange}
        maxLength={maxLength}
      ></textarea>
    </div>
  );
}
