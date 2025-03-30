import BannerList from "../../features/BannerList";
import DensityList from "../../features/DensityList";
import Options from "../../features/Options";
import ReadingTime from "../../features/ReadingTime";
import TextInput from "../../features/TextInput";
import { useText } from "../../../context/textContext";

export default function Main() {
  const text = useText();
  return (
    <main>
      <h1>{text.app_title}</h1>
      <section>
        <TextInput />
        <p>{text.limit_reached_alert}</p>
        <Options />
        <ReadingTime />
      </section>
      <section>
        <BannerList />
      </section>
      <section>
        <h3>{text.density_title}</h3>
        <p>{text.no_input_no_density}</p>
        <DensityList />
      </section>
    </main>
  );
}
