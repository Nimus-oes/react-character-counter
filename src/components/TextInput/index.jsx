import { lazy } from "react";
import { useText } from "../../context/textContext";
import "./TextInput.css";

export default function TextInput({ content, setContent, isLimitReached }) {
  const text = useText();
  const limitClass = isLimitReached ? "limit-reached" : "no-limit";

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
