import { useState } from "react";
import { cutList, getSortedDensity } from "./densityUtils";
import { useText } from "../../context/TextContext";
import Density from "./Density";

export default function DensityList({ userinput }) {
  const text = useText();
  const data = getSortedDensity(userinput, 1, true, true); // [[char, count, density], ...]
  if (data.length === 0) {
    return <p className="density-no-content">{text.no_input_no_density}</p>;
  }
  const densityList = data.map((item) => (
    <Density letter={item[0]} count={item[1]} ratio={item[2]} key={item[0]} />
  ));

  const shouldSplit = densityList.length > 5;
  const [isOpen, setIsOpen] = useState(false);
  const [firstList, secondList] = cutList(densityList, 5);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="density-list">
        {firstList}
        {isOpen && secondList}
      </div>
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
