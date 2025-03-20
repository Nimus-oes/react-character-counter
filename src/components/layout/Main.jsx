import { useState } from "react";
import InputReceiver from "../feature/InputReceiver";
import BannerLister from "../feature/BannerLister";
import DensityAnalyzer from "../feature/DensityAnalyzer";

export default function Main() {
  const [data, setData] = useState({
    userinput: "",
    nospace: false,
    limit: 0,
  });

  return (
    <main>
      <InputReceiver data={data} setData={setData} />
      <BannerLister data={data} />
      <DensityAnalyzer data={data} />
    </main>
  );
}
