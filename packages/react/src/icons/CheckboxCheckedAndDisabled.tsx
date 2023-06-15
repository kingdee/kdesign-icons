import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckboxCheckedAndDisabled = ({
  size = '1em',
  fill = 'currentColor',
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
          id="1236-多选框-选中且禁用"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.3025967,0 C22.3446162,0 24,1.6496172 24,3.6974033 L24,20.3025967 C24,22.3446162 22.3503828,24 20.3025967,24 L3.6974033,24 C1.65538385,24 0,22.3503828 0,20.3025967 L0,3.6974033 C0,1.65538385 1.6496172,0 3.6974033,0 L20.3025967,0 Z M20.5856397,1.5 L3.41436024,1.5 C2.35364551,1.5 1.5,2.35456615 1.5,3.41436024 L1.5,20.5856397 C1.5,21.6463545 2.35456615,22.5 3.41436024,22.5 L20.5856397,22.5 C21.6463545,22.5 22.5,21.6454338 22.5,20.5856397 L22.5,3.41436024 C22.5,2.35364551 21.6454338,1.5 20.5856397,1.5 Z M19.1338902,4.89539933 C19.6220365,5.42259845 19.6220365,6.27735708 19.1338902,6.80455618 L9.13407271,17.6043783 C8.53078219,18.2559331 7.51374619,18.0776871 7.13219177,17.2535283 L4.63223743,11.8536172 C4.3235065,11.1867572 4.57378238,10.375862 5.19124421,10.042432 C5.80870606,9.70900198 6.55953365,9.97930039 6.86826458,10.6461604 L8.59263842,14.3708145 L17.3661553,4.89539933 C17.8543019,4.36820023 18.6457437,4.36820023 19.1338902,4.89539933 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckboxCheckedAndDisabled.displayName = 'CheckboxCheckedAndDisabled';
export default CheckboxCheckedAndDisabled;
