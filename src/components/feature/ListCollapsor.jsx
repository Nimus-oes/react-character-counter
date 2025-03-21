import { useState } from "react";
import { cutList } from "../../utils/arrayUtils";

export default function ListCollapsor({
  mappedList,
  threshold,
  showLabel,
  hideLabel,
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
          className="collapsible-label"
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
