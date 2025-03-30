import { useText } from "../../../context/textContext";

export default function Options() {
  const text = useText();
  return (
    <div>
      <div>
        <input type="checkbox" id="nospace" />{" "}
        <label htmlFor="nospace">{text.option_title_excl_space}</label>
      </div>
      <div>
        <input type="checkbox" id="limit" />{" "}
        <label htmlFor="limit">{text.option_title_char_limit}</label>
        <input type="number" />
      </div>
    </div>
  );
}
