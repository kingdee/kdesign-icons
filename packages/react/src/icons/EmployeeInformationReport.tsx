import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EmployeeInformationReport = ({
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
          id="651.员工信息报表"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(5.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M5.5,1.83333335 L5.5,3.66666665 C5.5,4.76666666 6.23333338,5.50000001 7.33333336,5.50000001 L14.6666667,5.50000001 C15.7666667,5.50000001 16.5,4.76666666 16.5,3.66666665 L16.5,1.83333335 L20.1666667,1.83333335 C21.2666668,1.83333335 22,2.56666667 22,3.66666665 L22,23.8333334 C22,24.9333334 21.2666668,25.6666667 20.1666667,25.6666667 L1.83333333,25.6666667 C0.733333346,25.6666667 0,24.9333334 0,23.8333334 L0,3.66666665 C0,2.56666667 0.733333346,1.83333335 1.83333333,1.83333335 L5.5,1.83333335 Z M17.4166667,16.5000001 L4.58333336,16.5000001 C4.03333337,16.5000001 3.66666665,16.8666667 3.66666665,17.4166667 C3.66666665,17.9666667 4.03333334,18.3333334 4.58333336,18.3333334 L17.4166667,18.3333334 C17.9666667,18.3333334 18.3333334,17.9666667 18.3333334,17.4166667 C18.3333334,16.8666667 17.9666667,16.5000001 17.4166667,16.5000001 Z M17.4166667,11 L4.58333336,11 C4.03333337,11 3.66666665,11.3666667 3.66666665,11.9166667 C3.66666665,12.4666667 4.03333334,12.8333334 4.58333336,12.8333334 L17.4166667,12.8333334 C17.9666667,12.8333334 18.3333334,12.4666667 18.3333334,11.9166667 C18.3333334,11.3666667 17.9666667,11 17.4166667,11 Z M13.9333334,0 C14.3,0 14.6666667,0.36666666 14.6666667,0.733333346 L14.6666667,2.93333333 C14.6666667,3.29999999 14.3,3.66666665 13.9333334,3.66666665 L8.06666671,3.66666665 C7.70000004,3.66666665 7.33333336,3.30000002 7.33333336,2.93333333 L7.33333336,0.733333346 C7.33333336,0.366666686 7.70000002,0 8.06666671,0 L13.9333334,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EmployeeInformationReport.displayName = 'EmployeeInformationReport';
export default EmployeeInformationReport;
