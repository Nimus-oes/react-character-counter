import Options from "./Options";
import "./input.css";

export default function Input({ onChange }) {
  return (
    <section>
      <textarea
        className="input"
        name="input"
        aria-label="An input field to provide text to analyze"
        placeholder="Start typing or paste your text here"
        onChange={onChange}
      ></textarea>
      <Options />
    </section>
  );
}
