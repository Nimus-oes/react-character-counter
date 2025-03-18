import { useState } from "react";
import Input from "../Input";
import Analysis from "../Analysis";

export default function Main() {
  const [text, setText] = useState("");
  return (
    <>
      <h1>Analyze your text in real-time.</h1>
      <Input onChange={(e) => setText(e.target.value)} />
      <Analysis inputText={text} />
    </>
  );
}
