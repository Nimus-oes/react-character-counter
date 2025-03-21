import { useState } from "react";
import InputReceiver from "../feature/InputReceiver";
import BannerLister from "../feature/BannerLister";
import DensityAnalyzer from "../feature/DensityAnalyzer";
import "../../styles/main.css";

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
      <BannerLister data={data} />
      <h3 className="density-title">Letter Density</h3>
      <DensityAnalyzer data={data} />
    </main>
  );
}
