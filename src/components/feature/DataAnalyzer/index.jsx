import BannerList from "./BannerList";
import DensityList from "./DensityList";
import {
  noSpaceTotalChars,
  countWord,
  countSentence,
  limitText,
} from "../../../utils/textUtils";
import { getSortedDensity } from "../../../utils/textUtils";

function getCount(excludeSpace, maxLength, rawText) {
  const text = maxLength ? limitText(rawText, maxLength) : rawText;
  const totalCount = excludeSpace ? noSpaceTotalChars(text) : text.length;
  const wordCount = countWord(text);
  const sentenceCount = countSentence(text);

  return [totalCount, wordCount, sentenceCount];
}

function getBannerContent(totalCount, wordCount, sentenceCount) {
  return [
    {
      label: "Total Characters",
      count: totalCount,
      class: "purple-box",
    },
    {
      label: "Word Count",
      count: wordCount,
      class: "yellow-box",
    },
    {
      label: "Sentence Count",
      count: sentenceCount,
      class: "orange-box",
    },
  ];
}

export default function DataAnalyzer({ data }) {
  const [total, word, sentence] = getCount(
    data.nospace,
    data.maxLength,
    data.userinput,
  );
  const banners = getBannerContent(total, word, sentence);
  const density = getSortedDensity(data.userinput, 1, true, true);

  return (
    <div>
      <section className="banner-list">
        <BannerList bannerData={banners} />
      </section>
      <section>
        <h3 className="density-title">Letter Density</h3>
        <div className="density-content">
          {data.userinput ? (
            <DensityList densityData={density} />
          ) : (
            <p>No characters found. Start typing to see letter density.</p>
          )}
        </div>
      </section>
    </div>
  );
}
