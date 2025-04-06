import { useText } from "../../context/textContext";
import Checkbox from "./Checkbox";
import "./Options.css";

export default function Options({ content, setContent }) {
  const text = useText();
  const handleInput = (e) => {
    setContent((prev) => ({ ...prev, maxlength: e.target.value }));
  };

  const handleChange = (e) => {
    if (e.target.id === "nospace") {
      setContent((prev) => ({ ...prev, nospace: !content.nospace }));
    } else if (e.target.id === "limit") {
      setContent((prev) => ({
        ...prev,
        limit: !content.limit,
        maxlength: null,
      }));
    }
  };

  return (
    <div className="options">
      <Checkbox
        id="nospace"
        label={text.option_title_excl_space}
        isChecked={content.nospace}
        handleChange={handleChange}
        className="space-option"
      />
      <div className="limit-option-container">
        <Checkbox
          id="limit"
          label={text.option_title_char_limit}
          isChecked={content.limit}
          handleChange={handleChange}
          className="limit-option"
        />
        {content.limit && (
          <input type="number" onChange={handleInput} className="max-length" />
        )}
      </div>
    </div>
  );
}
