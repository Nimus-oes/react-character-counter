import { getReadingTime } from "./readingTimeUtils.js";
import { formatText } from "../../utils/formatText";
import { useText } from "../../context/TextContext";
import "./ReadingTime.css";

export default function ReadingTime({ userinput }) {
  const text = useText();
  const template = text.reading_time_display;
  const pluralRules = text.reading_time_value;
  const readingTimeValue = getReadingTime(userinput, 100);
  const readingTimeText = formatText(
    template,
    { reading_time_value: readingTimeValue },
    { reading_time_value: pluralRules },
  );
  return (
    <div>
      <div className="reading-time">{readingTimeText}</div>
    </div>
  );
}
