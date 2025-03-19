import Options from "./Options";
import "./input.css";

export default function Input({ onChange }) {
  return (
    <section className="content-box">
      <input
        className="input"
        type="text"
        aria-label="text-input-field"
        placeholder="Start typing or paste your text here"
        onChange={onChange}
      />
      <Options />
    </section>
  );
}
