import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DoubleArrowUp = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="156.双箭头上"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="双箭头上"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.87781746,11.6804801 L11,2.63368759 L20.1221825,11.6804801 C20.5517592,12.1065067 21.2482407,12.1065067 21.6778174,11.6804801 C22.1073942,11.2544536 22.1073942,10.5637282 21.6778174,10.1377017 L11.7778174,0.319519898 C11.3482407,-0.106506633 10.6517592,-0.106506633 10.2221825,0.319519898 L0.322182537,10.1377017 C-0.107394179,10.5637282 -0.107394179,11.2544536 0.322182537,11.6804801 C0.751759253,12.1065067 1.44824074,12.1065067 1.87781746,11.6804801 Z M1.87781746,23.6804801 L11,14.6336876 L20.1221825,23.6804801 C20.5517592,24.1065066 21.2482407,24.1065066 21.6778174,23.6804801 C22.1073942,23.2544536 22.1073942,22.5637282 21.6778174,22.1377017 L11.7778174,12.3195199 C11.3482407,11.8934934 10.6517592,11.8934934 10.2221825,12.3195199 L0.322182537,22.1377017 C-0.107394179,22.5637282 -0.107394179,23.2544536 0.322182537,23.6804801 C0.751759253,24.1065066 1.44824074,24.1065066 1.87781746,23.6804801 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DoubleArrowUp.displayName = 'DoubleArrowUp';
export default DoubleArrowUp;
