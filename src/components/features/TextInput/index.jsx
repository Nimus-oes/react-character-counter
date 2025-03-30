import { useText } from "../../../context/textContext";

export default function TextInput() {
  const text = useText();
  return (
    <div>
      <textarea name="" id="" placeholder={text.input_placeholder}></textarea>
    </div>
  );
}
