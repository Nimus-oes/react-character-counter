import { useState } from "react";
import InputReceiver from "../feature/InputReceiver";
import TextAnalyzer from "../feature/TextAnalyzer";

export default function Main() {
  const [data, setData] = useState({
    userinput: "",
    nospace: false,
    limit: 0,
  });

  return (
    <main>
      <InputReceiver data={data} setData={setData} />
      <TextAnalyzer data={data} />
    </main>
  );
}
