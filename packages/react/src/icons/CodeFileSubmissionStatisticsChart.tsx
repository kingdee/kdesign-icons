import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CodeFileSubmissionStatisticsChart = ({
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
          id="662.代码文件提交量统计图"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22,22.4888888 L22,23.4666667 L0,23.4666667 L0,22.4888888 L22,22.4888888 Z M4.24285713,2.93333333 C4.51224489,2.93333333 4.71428571,3.22666667 4.71428571,3.71555555 L4.71428571,20.8266667 C4.71428571,21.2177778 4.51224489,21.5111112 4.17551019,21.5111112 L0.538775494,21.5111112 C0.202040819,21.5111112 0,21.2177778 0,20.7288888 L0,3.71555555 C0,3.22666667 0.202040819,2.93333333 0.538775494,2.93333333 L4.24285713,2.93333333 Z M12.8267857,0 C13.1214286,0 13.3571429,0.391111119 13.3571429,0.88 L13.3571429,20.6311112 C13.3571429,21.12 13.1214286,21.5111112 12.8267857,21.5111112 L9.17321429,21.5111112 C8.87857142,21.5111112 8.64285713,21.12 8.64285713,20.6311112 L8.64285713,0.88 C8.64285713,0.391111119 8.87857142,0 9.17321429,0 L12.8267857,0 Z M21.3182942,7.82222219 C21.7273176,7.82222219 22,8.21333331 22,8.70222221 L22,20.5333333 C22,21.12 21.7273176,21.5111112 21.3864649,21.5111112 L17.9097656,21.5111112 C17.5689127,21.5111112 17.2962303,21.12 17.2962303,20.6311112 L17.2962303,8.70222221 C17.2280598,8.21333331 17.500742,7.82222219 17.8415949,7.82222219 L21.3182942,7.82222219 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CodeFileSubmissionStatisticsChart.displayName =
  'CodeFileSubmissionStatisticsChart';
export default CodeFileSubmissionStatisticsChart;
