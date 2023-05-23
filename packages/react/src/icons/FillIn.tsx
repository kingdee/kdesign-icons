import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FillIn = ({
  size = '1em',
  color = 'currentColor',
  rotate = 0,
  spin = false,
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="1220-填写"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,22.3304348 L20.1540373,22.3304348 L20.1540373,24 L0,24 L0,22.3304348 Z M1.4310559,18.9913044 L1.66956521,18.9913044 L6.91677019,17.3217391 C7.03602482,17.3217391 7.1552795,17.2024844 7.27453416,17.0832298 L19.2,5.15776399 C19.3192547,5.03850934 19.4385094,4.80000002 19.4385094,4.56149069 C19.4385094,4.32298133 19.3192547,4.08447204 19.2,3.96521738 L15.5031056,0.268322976 C15.1453416,-0.089440992 14.668323,-0.089440992 14.310559,0.268322976 L2.38509317,12.1937888 C2.26583851,12.3130434 2.26583851,12.4322981 2.14658386,12.5515528 L0.477018648,17.7987577 C0.357763992,18.1565218 0.477018648,18.3950311 0.71552796,18.6335404 C0.954037272,18.8720497 1.19254661,18.9913044 1.4310559,18.9913044 Z M3.81614906,13.2670807 L14.9068324,2.17639752 L17.4111802,4.68074534 L6.32049691,15.7714285 L2.74285714,16.8447205 L3.81614906,13.2670807 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FillIn.displayName = 'FillIn';
export default FillIn;
