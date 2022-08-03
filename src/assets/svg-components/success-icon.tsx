import React from "react";

const SuccessIcon = ({ ...props }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          fill={props.fill}
          d="M500,13.2c-270.6,0-490,218-490,486.9c0,268.8,219.4,486.8,490,486.8c270.6,0,490-218,490-486.8C990,231.1,770.6,13.2,500,13.2L500,13.2z M781.1,373.7L464.1,688.6l0,0c-14.6,14.5-36.9,16.7-53.9,6.8c-3.2-1.9-6.1-4.2-8.8-6.8l0,0L219,507.4c-17.3-17.2-17.3-45.1,0-62.3c17.3-17.2,45.4-17.2,62.7,0l151.1,150.1l285.6-283.8c17.3-17.2,45.4-17.2,62.7,0C798.4,328.6,798.4,356.5,781.1,373.7L781.1,373.7z"
        />
      </g>
    </svg>
  );
};

export default SuccessIcon;
