import { useState } from "react";
import BannerList from "../BannerList";
import DensityList from "../DensityList";
import Options from "../Options";
import ReadingTime from "../ReadingTime";
import TextInput from "../TextInput";
import { formatText } from "../../utils/formatText";
import { useText } from "../../context/textContext";
import "./Main.css";

function getLimitStatus(text, maxLength) {
  return text && maxLength && text.length > maxLength;
}

export default function Main() {
  const text = useText();
  const [content, setContent] = useState({
    userinput: "",
    nospace: false,
    limit: false,
    maxlength: null,
  });
  const isLimitReached = getLimitStatus(content.userinput, content.maxlength);
  const alertTemplate = text.limit_reached_alert;
  const limitAlert = formatText(alertTemplate, {
    max_length: content.maxlength,
  });

  return (
    <main className="main">
      <h1 className="app-title">{text.app_title}</h1>
      <section>
        <TextInput content={content} setContent={setContent} />
        {isLimitReached && <p>{limitAlert}</p>}
        <div className="sub-input">
          <Options content={content} setContent={setContent} />
          <ReadingTime userinput={content.userinput} />
        </div>
      </section>
      <section>
        <BannerList content={content} />
      </section>
      <section>
        <h3 className="density-title">{text.density_title}</h3>
        {content.userinput ? (
          <DensityList userinput={content.userinput} />
        ) : (
          <p>{text.no_input_no_density}</p>
        )}
      </section>
    </main>
  );
}
