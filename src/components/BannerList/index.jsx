import Banner from "./Banner";
import {
  noSpaceTotalChars,
  countWord,
  countSentence,
} from "../../utils/textUtils";
import "./BannerList.css";
import { useText } from "../../context/textContext";

export default function BannerList({ content }) {
  const text = useText();
  const userinput = content.userinput;
  const banners = [
    {
      title: text.banner_title_total,
      value: content.nospace ? noSpaceTotalChars(userinput) : userinput.length,
    },
    { title: text.banner_title_word, value: countWord(userinput) },
    { title: text.banner_title_sentence, value: countSentence(userinput) },
  ];
  const formatDigits = (num) => {
    return num < 10 ? `0${num}` : num.toString(); // Stringfy the number so that the function returns a consistent type
  };

  const bannerSetList = banners.map((item, index) => (
    <Banner title={item.title} value={formatDigits(item.value)} key={index} />
  ));

  return <div className="banner-list">{bannerSetList}</div>;
}
