import Banner from "./Banner";
import { noSpaceTotalChars, countWord, countSentence } from "./bannerUtils.js";
import "./BannerList.css";
import { useText } from "../../context/TextContext";

export default function BannerList({ userinput, nospace }) {
  const text = useText();
  const banners = [
    {
      title: text.banner_title_total,
      value: nospace ? noSpaceTotalChars(userinput) : userinput.length,
      class: "total-count",
    },
    {
      title: text.banner_title_word,
      value: countWord(userinput),
      class: "word-count",
    },
    {
      title: text.banner_title_sentence,
      value: countSentence(userinput),
      class: "sentence-count",
    },
  ];

  const formatDigits = (num) => {
    return num < 10 ? `0${num}` : num.toString(); // Stringfy the number so that the function returns a consistent type
  };

  const bannerSetList = banners.map((item, index) => (
    <Banner
      title={item.title}
      value={formatDigits(item.value)}
      key={index}
      className={item.class}
    />
  ));

  return <div className="banner-list">{bannerSetList}</div>;
}
