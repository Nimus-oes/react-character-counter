import Density from "../../ui/Density";
import ListCollapsor from "./ListCollapsor";
import "../../../styles/densityList.css";

export default function DensityList({ densityData }) {
  let id = 0;
  const densityList = densityData.map((item) => (
    <Density
      key={id++}
      letter={item[0]}
      bar="Some bar"
      value={`${item[1]} (${item[2]}%)`}
    />
  ));

  return (
    <ListCollapsor
      mappedList={densityList}
      threshold={4}
      showLabel="See more"
      hideLabel="See less"
      labelClass="collapsible-label"
    />
  );
}
