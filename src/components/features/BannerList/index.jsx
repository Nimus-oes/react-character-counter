import { useText } from "../../../context/textContext";
import Banner from "../Banner";

export default function BannerList() {
  const text = useText();
  const banners = [
    text.banner_title_total,
    text.banner_title_word,
    text.banner_title_sentence,
  ];

  const bannerSetList = banners.map((label, index) => (
    <Banner value="0" title={label} key={index} />
  ));

  return (
    <div>
      <div>{bannerSetList}</div>
    </div>
  );
}
