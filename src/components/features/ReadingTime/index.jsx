import { useText } from "../../../context/textContext";

export default function ReadingTime() {
  const text = useText();
  return (
    <div>
      <div>{text.reading_time_display}</div>
    </div>
  );
}
