import Options from "./Options";

export default function Input({ onChange }) {
  return (
    <section>
      <input
        type="text"
        aria-label="text-input-field"
        placeholder="Start typing or paste your text here"
        onChange={onChange}
      />
      <Options />
    </section>
  );
}
