import Density from "../ui/Density";
import ListCollapsor from "./ListCollapsor";
import { getSortedDensity } from "../../utils/textUtils";
import "../../styles/densityAnalyzer.css";

export default function DensityAnalyzer({ data }) {
  if (!data.userinput) {
    return <p>No characters found. Start typing to see letter density.</p>;
  }
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

  return (
    <div>
      <ListCollapsor
        mappedList={densityList}
        threshold={4}
        showLabel="See more"
        hideLabel="See less"
      />
    </div>
  );
}
