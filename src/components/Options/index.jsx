import { useText } from "../../context/textContext";
import "./Options.css";

export default function Options({ content, setContent }) {
  const text = useText();
  const handleInput = (e) => {
    setContent({ ...content, maxlength: e.target.value });
  };

  const handleSelect = (e) => {
    if (e.target.id === "nospace") {
      setContent({ ...content, nospace: !content.nospace });
    } else if (e.target.id === "limit") {
      setContent({ ...content, limit: !content.limit, maxlength: null });
    }
  };

  return (
    <div className="options">
      <div className="space-option">
        <input type="checkbox" id="nospace" onClick={handleSelect} />{" "}
        <label htmlFor="nospace">{text.option_title_excl_space}</label>
      </div>
      <div className="limit-option">
        <input type="checkbox" id="limit" onClick={handleSelect} />{" "}
        <label htmlFor="limit">{text.option_title_char_limit}</label>
        {content.limit && (
          <input type="number" onChange={handleInput} className="max-length" />
        )}
      </div>
    </div>
  );
}
