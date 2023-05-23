import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RateNineSixteen = ({
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
          id="86.9:16比率"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="9:16比率"
            transform="translate(9.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14,23.25 C14,23.6642135 13.651777,24 13.2222222,24 L0.777777778,24 C0.348223008,24 0,23.6642135 0,23.25 L0,0.75 C0,0.335786448 0.348223008,0 0.777777778,0 L13.2222222,0 C13.651777,0 14,0.335786448 14,0.75 L14,23.25 Z M12.4444444,22.5 L12.4444444,1.5 L1.55555556,1.5 L1.55555556,22.5 L12.4444444,22.5 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RateNineSixteen.displayName = 'RateNineSixteen';
export default RateNineSixteen;
