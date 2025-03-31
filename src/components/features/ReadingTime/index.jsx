import { useText } from "../../../context/textContext";
import { useContent } from "../../../context/StateContext";
import { getReadingTime } from "../../../utils/textUtils";
import { formatText } from "../../../utils/formatText";

export default function ReadingTime() {
  const text = useText();
  const template = text.reading_time_display;
  const pluralRules = text.reading_time_value;
  const userinput = useContent().userinput;
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
