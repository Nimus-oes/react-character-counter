import Banner from "../../ui/Banner";
import "../../../styles/bannerList.css";

export default function BannerList({ bannerData }) {
  let id = 0;
  const bannerList = bannerData.map((banner) => (
    <Banner
      key={id++}
      label={banner.label}
      count={banner.count}
      className={banner.class}
    />
  ));

  return <>{bannerList}</>;
}
