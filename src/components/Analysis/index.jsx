import Banner from "./Banner";
import Density from "./Density";
import { wordCounter, sentenceCounter } from "./Helper";

export default function Analysis({ inputText }) {
  const banners = [
    { id: 1, category: "Total Characters", value: inputText.length },
    { id: 2, category: "Word Count", value: wordCounter(inputText) },
    { id: 3, category: "Sentence Count", value: sentenceCounter(inputText) },
  ];
  const bannerList = banners.map((item) => (
    <Banner key={item.id} title={item.category} value={item.value} />
  ));

  return (
    <section>
      {bannerList}
      <Density />
    </section>
  );
}
