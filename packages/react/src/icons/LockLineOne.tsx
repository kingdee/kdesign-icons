import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LockLineOne = ({
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
          id="1494-锁定_线1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M3.69230769,11.0769231 L3.69230769,5.47257175 C3.69230769,2.61329627 6.17298581,0 9.23305735,0 C12.0112782,0 14.7673143,2.50934125 14.7610896,5.47257175 C14.7609884,5.52074746 14.7671526,7.38834171 14.7613237,11.0769231 L16.6238814,11.0769231 C17.6387913,11.0769231 18.4615385,11.8853194 18.4615385,12.9284849 L18.4615385,22.1484382 C18.4615385,23.1710275 17.6203119,24 16.6238814,24 L1.83765705,24 C0.822747091,24 0,23.1916036 0,22.1484382 L0,12.9284849 C0,11.9058956 0.841226589,11.0769231 1.83765705,11.0769231 L3.69230769,11.0769231 Z M5.53846155,11.0769231 L12.9342696,11.0769231 C12.931034,10.2313869 12.9355562,5.98907437 12.9355562,5.93892731 C12.9355562,3.70142671 11.0009183,1.84615386 9.23305735,1.84615386 C9.2082637,1.84615386 9.1835098,1.84645364 9.15879851,1.84705006 C8.20024005,1.87152871 7.30584393,2.36770421 6.64584573,3.17252865 C7.30584393,2.36770421 8.20024005,1.87152871 9.15880515,1.84709981 C7.21696206,1.89391684 5.53846155,3.77238195 5.53846155,5.93892731 L5.53846155,11.0769231 Z M16.6238814,22.1538462 C16.6068369,22.1538462 16.6153846,22.1452931 16.6153846,22.1484382 L16.6153846,12.9284849 L1.83765705,12.9230769 L1.84615386,22.1484382 L16.6238814,22.1538462 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LockLineOne.displayName = 'LockLineOne';
export default LockLineOne;