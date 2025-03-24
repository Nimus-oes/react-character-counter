import { useState } from "react";
import InputReceiver from "../feature/InputReceiver";
import "../../styles/main.css";
import DataAnalyzer from "../feature/DataAnalyzer";

export default function Main() {
  const [data, setData] = useState({
    userinput: "",
    nospace: false,
    limit: false,
    maxLength: null,
  });

  return (
    <main className="main">
      <h1 className="title">Analyze your text in real-time.</h1>
      <InputReceiver data={data} setData={setData} />
      <DataAnalyzer data={data} />
    </main>
  );
}
