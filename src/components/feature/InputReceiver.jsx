import Input from "../ui/Input";

export default function InputReceiver({ data, setData }) {
  const getInput = (e) => {
    const text = e.target.value;
    setData({ ...data, userinput: text });
  };

  return (
    <div>
      <Input handleChange={getInput} />
    </div>
  );
}
