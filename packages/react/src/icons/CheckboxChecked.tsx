import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckboxChecked = ({
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
          id="1246-复选框选中"
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
              d="M20.3025967,0 C22.3446162,0 24,1.64961722 24,3.69740335 L24,20.3025967 C24,22.3446162 22.3503828,24 20.3025967,24 L3.69740335,24 C1.65538387,24 0,22.3503828 0,20.3025967 L0,3.69740335 C0,1.65538387 1.64961722,0 3.69740335,0 L20.3025967,0 Z M19.1338902,4.8953993 C18.6457435,4.36820023 17.8543017,4.36820023 17.3661555,4.8953993 L17.3661555,4.8953993 L8.59263842,14.3708145 L6.86826456,10.6461603 C6.55953362,9.97930039 5.80870606,9.70900195 5.19124423,10.042432 C4.57378238,10.3758619 4.3235065,11.1867572 4.63223743,11.8536172 L4.63223743,11.8536172 L7.13219177,17.2535283 C7.51374614,18.0776869 8.53078219,18.2559331 9.13407269,17.6043783 L9.13407269,17.6043783 L19.1338902,6.80455618 C19.6220365,6.27735708 19.6220365,5.42259842 19.1338902,4.8953993 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckboxChecked.displayName = 'CheckboxChecked';
export default CheckboxChecked;