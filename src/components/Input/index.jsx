import Options from "./Options";

export default function Input() {
  return (
    <section>
      <input
        type="text"
        aria-label="text-input-field"
        placeholder="Start typing or paste your text here"
      />
      <Options />
    </section>
  );
}
