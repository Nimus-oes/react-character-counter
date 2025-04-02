import { getReadingTime } from "../../utils/textUtils";
import { formatText } from "../../utils/formatText";
import { useText } from "../../context/textContext";

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
      <div>{readingTimeText}</div>
    </div>
  );
}
