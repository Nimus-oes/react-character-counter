import { v4 as uuidv4 } from "uuid";
import BannerLister from "./BannerLister";
import { getSortedDensity, getReadingTime } from "../../utils/textUtils";

export default function TextAnalyzer({ data }) {
  return (
    <div>
      <BannerLister data={data} />
    </div>
  );
}
