import Banner from "./Banner";
import Density from "./Density";

export default function Analysis() {
  const banners = ["Total Characters", "Word Count", "Sentence Count"];
  const bannerList = banners.map((item) => <Banner key={item} title={item} />);
  return (
    <section>
      {bannerList}
      <Density />
    </section>
  );
}
