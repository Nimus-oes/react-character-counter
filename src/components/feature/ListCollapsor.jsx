import { useState } from "react";
import { cutList } from "../../utils/arrayUtils";

export default function ListCollapsor({
  mappedList,
  threshold,
  showLabel,
  hideLabel,
  labelClass,
}) {
  const shouldCollapse = mappedList.length > threshold;
  const [initialItems, extraItems] = cutList(mappedList, threshold);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {initialItems}
      {isOpen && extraItems}
      {shouldCollapse && (
        <button
          className={labelClass}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? hideLabel : showLabel}
        </button>
      )}
    </div>
  );
}
