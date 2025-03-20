import Input from "../ui/Input";
import Option from "../ui/Option.JSX";

export default function InputReceiver({ data, setData }) {
  const getInput = (e) => {
    const text = e.target.value;
    setData({ ...data, userinput: text });
  };

  return (
    <div>
      <Input handleChange={getInput} />
      <Option name="nospace" id="nospace" label="Exlcude Spaces" />
      <Option name="limit" id="limit" label="Set Character Limit" />
    </div>
  );
}
