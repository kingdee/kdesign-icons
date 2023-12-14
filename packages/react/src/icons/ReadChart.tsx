import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReadChart = ({
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
          id="637.查看图表"
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
              d="M10.8060301,1.21619716 L10.8060301,13.290411 L22.7925968,13.290411 C22.4391568,19.2718137 17.4764894,24.0134002 11.4063651,24.0134002 C5.10680361,24.0134002 1.87688018e-16,18.9065966 1.87688018e-16,12.6070352 C1.87688018e-16,6.50884673 4.78553164,1.52837911 10.8060301,1.21619716 L10.8060301,1.21619716 Z M13.2073701,1.87688018e-16 C19.0464749,0.322706451 23.7188147,5.02129633 24,10.8713806 L13.2073701,10.8713806 L13.2073701,1.87688018e-16 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReadChart.displayName = 'ReadChart';
export default ReadChart;
