import { useState } from "react";
import InputReceiver from "../feature/InputReceiver";
import BannerLister from "../feature/BannerLister";
import DensityAnalyzer from "../feature/DensityAnalyzer";

export default function Main() {
  const [data, setData] = useState({
    userinput: "",
    nospace: false,
    limit: false,
    maxLength: null,
  });

  return (
    <main>
      <h1>Analyze your text in real-time.</h1>
      <InputReceiver data={data} setData={setData} />
      <BannerLister data={data} />
      <h3>Letter Density</h3>
      <DensityAnalyzer data={data} />
    </main>
  );
}
