import React from "react";

const FreightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M8.97 5.13a1.97 1.97 0 1 1 3.94 0 1.97 1.97 0 0 1-3.94 0ZM2 12.92v-2h20v2H2Zm9-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-7-1v5.06h5.06v-5.06H4Zm2 2h1.06v1.06H6v-1.06ZM14.94 16v-5.08h5.06V16h-5.06Zm2-3.08h1.06v1.06h-1.06v-1.06Z" />
    </svg>
  );
};

export default FreightIcon;
