import { useText } from "../../../context/textContext";
import { useContent, useSetContent } from "../../../context/StateContext";
import "./TextInput.css";

function getLimitClass(text, maxLength) {
  if (text && maxLength) {
    return text.length > maxLength ? "limit-reached" : "limit-available";
  } else {
    return "no-limit";
  }
}

export default function TextInput() {
  const text = useText();
  const content = useContent();
  const setContent = useSetContent();
  const limitClass = getLimitClass(content.userinput, content.maxlength);

  const handleInput = (e) => {
    setContent({ ...content, userinput: e.target.value });
  };

  return (
    <textarea
      name=""
      id=""
      placeholder={text.input_placeholder}
      onChange={handleInput}
      className={`${limitClass} text-input`}
    ></textarea>
  );
}
