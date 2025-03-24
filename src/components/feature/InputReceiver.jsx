import Textbox from "../ui/Textbox";
import Inputbox from "../ui/Inputbox";
import Option from "../ui/Option.JSX";
import Timer from "../ui/Timer";
import { getReadingTime } from "../../utils/textUtils";
import "../../styles/inputReceiver.css";

function isLimitReached(text, maxLength) {
  return maxLength && text.length > maxLength;
}

function getFocusClass(
  isLimit,
  isLimitReached,
  classReached,
  classAvailable,
  classNoLimit,
) {
  if (!isLimit) {
    return classNoLimit;
  }
  return isLimitReached ? classReached : classAvailable;
}

export default function InputReceiver({ data, setData }) {
  const setInput = (e) => {
    setData({ ...data, userinput: e.target.value });
  };
  const setSpace = (e) => {
    setData({ ...data, nospace: e.target.checked });
  };
  const setLimit = (e) => {
    setData({ ...data, limit: e.target.checked, maxLength: null }); // Reset the previous max length to receive a new value or to reset the limit
  };
  const setMaxLength = (e) => {
    setData({ ...data, maxLength: e.target.value });
  };
  const limitReached = isLimitReached(data.userinput, data.maxLength);
  const focusClass = getFocusClass(
    data.limit,
    limitReached,
    "textbox-limit-reached",
    "textbox-limit-available",
    "textbox-no-limit",
  );
  const readingTime = getReadingTime(data.userinput, 200); // Calculate reading time with 200 words per mintue speed

  return (
    <section>
      <div>
        <Textbox
          handleChange={setInput}
          maxLength={data.maxLength}
          uiClass="textbox"
          focusClass={focusClass}
        />
        {limitReached && (
          <div className="limit-alert">
            Limit reached! Your text exceeds {data.maxLength} characters.
          </div>
        )}
      </div>
      <div className="sub-input">
        <div className="options">
          <Option
            name="nospace"
            id="nospace"
            label="Exclude Spaces"
            handleChange={setSpace}
          />
          <div className="limit-item">
            <Option
              name="limit"
              id="limit"
              label="Set Character Limit"
              handleChange={setLimit}
            />
            {data.limit && (
              <Inputbox className="limit-input" handleChange={setMaxLength} />
            )}
          </div>
        </div>
        <Timer readingTime={readingTime} />
      </div>
    </section>
  );
}
