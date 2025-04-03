import { useState } from "react";
import { cutList, getSortedDensity } from "./densityUtils";
import { useText } from "../../context/textContext";
import Density from "./Density";

export default function DensityList({ userinput }) {
  const data = getSortedDensity(userinput, 1, true, true); // [[char, count, density], ...]
  const densityList = data.map((item, index) => (
    <Density
      letter={item[0]}
      bar="Some bar"
      ratio={`${item[1]} (${item[2]}%)`}
      key={index}
    />
  ));

  const shouldSplit = densityList.length > 5;
  const [isOpen, setIsOpen] = useState(false);
  const [firstList, secondList] = cutList(densityList, 5);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const text = useText();

  return (
    <div>
      {firstList}
      {isOpen && secondList}
      {shouldSplit && (
        <p className="list-label" onClick={handleClick}>
          {isOpen
            ? text.density_list_close_label
            : text.density_list_open_label}
        </p>
      )}
    </div>
  );
}
