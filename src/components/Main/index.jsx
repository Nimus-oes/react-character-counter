import { useState } from "react";
import Input from "../Input";
import Analysis from "../Analysis";
import "./main.css";

export default function Main() {
  const [text, setText] = useState("");
  return (
    <main className="main">
      <h1>Analyze your text in real-time.</h1>
      <Input onChange={(e) => setText(e.target.value)} />
      <Analysis inputText={text} />
    </main>
  );
}
