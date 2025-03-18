import Banner from "./Banner";
import Density from "./Density";
import Graph from "./Graph";
import { countWord, countSentence, getSortedDensity } from "./Helper";
import "./analysis.css";

export default function Analysis({ inputText }) {
  const banners = [
    { id: 1, category: "Total Characters", value: inputText.length },
    { id: 2, category: "Word Count", value: countWord(inputText) },
    { id: 3, category: "Sentence Count", value: countSentence(inputText) },
  ];

  const bannerList = banners.map((item) => (
    <Banner key={item.id} title={item.category} value={item.value} />
  ));

  const density = getSortedDensity(inputText, 1);
  const densityGraph = density.map((item) => (
    <Graph key={item[0]} letter={item[0]} count={item[1]} percent={item[2]} />
  ));

  return (
    <section>
      <div className="banner-container">{bannerList}</div>
      <div>
        <Density inputText={inputText}>{densityGraph}</Density>
      </div>
    </section>
  );
}
