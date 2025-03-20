import Density from "../ui/Density";
import { getSortedDensity } from "../../utils/textUtils";

export default function DensityAnalyzer({ data }) {
  const density = getSortedDensity(data.userinput, 1);
  let id = 0;
  const densityList = density.map((item) => (
    <Density
      key={id++}
      letter={item[0]}
      bar="Some bar"
      value={`${item[1]} (${item[2]}%)`}
    />
  ));

  return <div>{densityList}</div>;
}
