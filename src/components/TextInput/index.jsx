import { lazy } from "react";
import { useText } from "../../context/textContext";
import "./TextInput.css";

export default function TextInput({ content, setContent }) {
  const text = useText();
  const limitReached =
    content.userinput &&
    content.maxlength &&
    content.userinput.length > content.maxlength;
  const limitClass = limitReached ? "limit-reached" : "no-limit";

  const handleInput = (e) => {
    setContent((prev) => ({ ...prev, userinput: e.target.value }));
  };

  return (
    <label>
      <textarea
        name=""
        id=""
        placeholder={text.input_placeholder}
        onChange={handleInput}
        className={`${limitClass} text-input`}
        maxLength={content.maxlength}
        value={content.userinput}
      ></textarea>
    </label>
  );
}
