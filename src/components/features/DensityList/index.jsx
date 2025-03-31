import Density from "../Density";
import { getSortedDensity } from "../../../utils/textUtils";
import { useContent } from "../../../context/StateContext";

export default function DensityList() {
  const content = useContent();
  const userinput = content.userinput;
  const data = getSortedDensity(userinput, 1, true, true); // [[char, count, density], ...]
  const densitySetList = data.map((item, index) => (
    <Density
      letter={item[0]}
      bar="Some bar"
      ratio={`${item[1]} (${item[2]}%)`}
      key={index}
    />
  ));
  return (
    <div>
      <div>{densitySetList}</div>
    </div>
  );
}
