import { useText } from "../../../context/textContext";
import { useContent, useSetContent } from "../../../context/StateContext";

export default function Options() {
  const text = useText();
  const content = useContent();
  const setContent = useSetContent();

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
    <div>
      <div>
        <input type="checkbox" id="nospace" onClick={handleSelect} />{" "}
        <label htmlFor="nospace">{text.option_title_excl_space}</label>
      </div>
      <div>
        <input type="checkbox" id="limit" onClick={handleSelect} />{" "}
        <label htmlFor="limit">{text.option_title_char_limit}</label>
        {content.limit && <input type="number" onChange={handleInput} />}
      </div>
    </div>
  );
}
