import Input from "../ui/Input";
import Option from "../ui/Option.JSX";
import Timer from "../ui/Timer";
import { getReadingTime } from "../../utils/textUtils";

export default function InputReceiver({ data, setData }) {
  const getInput = (e) => {
    const text = e.target.value;
    setData({ ...data, userinput: text });
  };

  const readingTime = getReadingTime(data.userinput, 200); // Calculate reading time with 200 words per mintue speed

  return (
    <section>
      <div>
        <Input handleChange={getInput} />
      </div>
      <div>
        <Option name="nospace" id="nospace" label="Exlcude Spaces" />
        <Option name="limit" id="limit" label="Set Character Limit" />
        <Timer readingTime={readingTime} />
      </div>
    </section>
  );
}
