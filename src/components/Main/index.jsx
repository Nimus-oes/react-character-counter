import { useState } from "react";
import BannerList from "../BannerList";
import DensityList from "../DensityList";
import Options from "../Options";
import ReadingTime from "../ReadingTime";
import TextInput from "../TextInput";
import { formatText } from "../../utils/formatText";
import { useText } from "../../context/TextContext";
import "./Main.css";

export default function Main() {
  const text = useText();
  const [content, setContent] = useState({
    userinput: "",
    nospace: false,
    limit: false,
    maxlength: null,
  });
  const isLimitReached =
    content.userinput &&
    content.maxlength &&
    content.userinput.length > content.maxlength;
  const alertTemplate = text.limit_reached_alert;
  const limitAlert = formatText(alertTemplate, {
    max_length: content.maxlength,
  });

  return (
    <main className="main">
      <h1 className="app-title">{text.app_title}</h1>
      <section>
        <TextInput
          content={content}
          setContent={setContent}
          isLimitReached={isLimitReached}
        />
        {isLimitReached && <p className="limit-alert">{limitAlert}</p>}
        <div className="sub-input">
          <Options content={content} setContent={setContent} />
          <ReadingTime userinput={content.userinput} />
        </div>
      </section>
      <section>
        <BannerList userinput={content.userinput} nospace={content.nospace} />
      </section>
      <section>
        <h3 className="density-title">{text.density_title}</h3>
        {content.userinput ? (
          <DensityList userinput={content.userinput} />
        ) : (
          <p className="density-no-content">{text.no_input_no_density}</p>
        )}
      </section>
    </main>
  );
}
