import BannerList from "../../features/BannerList";
import DensityList from "../../features/DensityList";
import Options from "../../features/Options";
import ReadingTime from "../../features/ReadingTime";
import TextInput from "../../features/TextInput";
import { useText } from "../../../context/textContext";
import { useContent } from "../../../context/StateContext";
import { formatText } from "../../../utils/formatText";
import "./Main.css";

function getLimitStatus(text, maxLength) {
  return text && maxLength && text.length > maxLength;
}

export default function Main() {
  const text = useText();
  const content = useContent();
  const isLimitReached = getLimitStatus(content.userinput, content.maxlength);
  const alertTemplate = text.limit_reached_alert;
  const limitAlert = formatText(alertTemplate, {
    max_length: content.maxlength,
  });

  return (
    <main className="main">
      <h1 className="app-title">{text.app_title}</h1>
      <section>
        <TextInput />
        {isLimitReached && <p>{limitAlert}</p>}
        <div className="sub-input">
          <Options />
          <ReadingTime />
        </div>
      </section>
      <section>
        <BannerList />
      </section>
      <section>
        <h3>{text.density_title}</h3>
        {content.userinput ? (
          <DensityList />
        ) : (
          <p>{text.no_input_no_density}</p>
        )}
      </section>
    </main>
  );
}
