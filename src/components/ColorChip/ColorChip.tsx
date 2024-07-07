import React from 'react';

// interface ColorChipProps {
//   colorChip: String;
// }

// export default function ColorChip({ colorChip }: ColorChipProps) {
export default function ColorChip() {
  return (
    <div className="ms-2.5 flex items-center">
      {/* <div className={`w-2.5 h-2.5 ms-[2px] rounded-sm bg-chip-${colorChip}-1`}></div>
      <div className={`w-2.5 h-2.5 ms-[2px] rounded-sm bg-chip-${colorChip}-2`}></div>
      <div className={`w-2.5 h-2.5 ms-[2px] rounded-sm bg-chip-${colorChip}-3`}></div>
      <div className="w-2.5 h-2.5 ms-[2px] rounded-sm bg-color-white"></div> */}
      <div className={`ms-[2px] size-2.5 rounded-sm bg-chip-red-1`}></div>
      <div className={`ms-[2px] size-2.5 rounded-sm bg-chip-red-2`}></div>
      <div className={`ms-[2px] size-2.5 rounded-sm bg-chip-red-3`}></div>
      <div className="ms-[2px] size-2.5 rounded-sm bg-color-white"></div>
    </div>
  );
}
