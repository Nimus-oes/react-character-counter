import Input from "../ui/Input";
import Option from "../ui/Option.JSX";
import Timer from "../ui/Timer";
import { getReadingTime } from "../../utils/textUtils";

export default function InputReceiver({ data, setData }) {
  const setInput = (e) => {
    const text = e.target.value;
    setData({ ...data, userinput: text });
  };

  const setOption = (e) => {
    setData({ ...data, [e.target.id]: e.target.checked });
  };

  const readingTime = getReadingTime(data.userinput, 200); // Calculate reading time with 200 words per mintue speed

  return (
    <section>
      <div>
        <Input handleChange={setInput} />
      </div>
      <div>
        <Option
          name="nospace"
          id="nospace"
          label="Exlcude Spaces"
          value="nospace"
          handleChange={setOption}
        />
        <Option
          name="limit"
          id="limit"
          label="Set Character Limit"
          value="limit"
          handleChange={setOption}
        />
        <Timer readingTime={readingTime} />
      </div>
    </section>
  );
}
