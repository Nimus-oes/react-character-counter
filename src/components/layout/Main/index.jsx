import BannerList from "../../features/BannerList";
import DensityList from "../../features/DensityList";
import Options from "../../features/Options";
import ReadingTime from "../../features/ReadingTime";
import TextInput from "../../features/TextInput";

export default function Main() {
  return (
    <main>
      <h1>Character Counter</h1>
      <section className="user-input">
        <TextInput />
        <Options />
        <ReadingTime />
      </section>
      <section className="data-count">
        <BannerList />
      </section>
      <section className="data-density">
        <h3>Density</h3>
        <DensityList />
      </section>
    </main>
  );
}
