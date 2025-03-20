import Banner from "../ui/Banner";
import {
  noSpaceTotalChars,
  countWord,
  countSentence,
} from "../../utils/textUtils";

export default function BannerLister({ data }) {
  const text = data.userinput;
  const banners = [
    {
      label: "Total Characters",
      calc: () => (data.nospace ? noSpaceTotalChars(text) : text.length),
    },
    {
      label: "Word Count",
      calc: () => countWord(text),
    },
    {
      label: "Sentence Count",
      calc: () => countSentence(text),
    },
  ];

  let idval = 0;

  const bannerList = banners.map((banner) => (
    <Banner key={idval++} label={banner.label} count={banner.calc()} />
  ));

  console.log(bannerList);

  return <div>{bannerList}</div>;
}
