import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Company = ({
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
          id="1265-公司"
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
              d="M13.7141802,0 C15.414341,0.0374733113 16.7675242,1.43652705 16.7483204,3.13699241 L16.7483204,3.13699241 L16.7483204,7.62820558 L21.1881074,7.62820558 C21.9412572,7.6327147 22.6615056,7.93742115 23.189224,8.47479292 C23.7169423,9.01216459 24.0085439,9.73781754 23.9998093,10.4909254 L23.9998093,10.4909254 L23.9998093,23.998849 L0.000176513514,23.998849 L0.000176513514,3.13699241 C-0.00859094136,2.31408817 0.309563857,1.52126107 0.885015801,0.932949852 C1.46046775,0.344638666 2.24607105,0.00904262917 3.06897642,0 L3.06897642,0 L13.7141802,0 Z M13.7141802,1.83419775 L3.00040828,1.83419775 C2.28759792,1.84357762 1.71475565,2.42412036 1.71475565,3.13699241 L1.71475565,3.13699241 L1.71475565,22.1646513 L4.38891312,22.1646513 L4.38891312,18.3591195 C4.38858056,17.1860395 5.324636,16.2271535 6.49738342,16.1992231 L6.49738342,16.1992231 L10.2857732,16.1992231 C11.4490066,16.2364234 12.3698647,17.1953335 12.3599594,18.3591195 L12.3599594,18.3591195 L12.3599594,22.1475092 L14.9998328,22.1646513 L14.9998328,3.13699241 C14.9998328,2.42412036 14.4269905,1.84357762 13.7141802,1.83419775 L13.7141802,1.83419775 Z M21.1881074,9.44526129 L16.7483204,9.44526129 L16.7483204,22.1475092 L22.1994875,22.1475092 L22.2166295,22.1646513 L22.2166295,10.4909254 C22.2212258,10.2151865 22.1148965,9.94915245 21.9215107,9.75254359 C21.728125,9.55593482 21.4638846,9.44526129 21.1881074,9.44526129 L21.1881074,9.44526129 Z M10.2857732,18.0334208 L6.49738342,18.0334208 C6.3242323,18.0425466 6.18858647,18.1857282 6.18882614,18.3591195 L6.18882614,18.3591195 L6.18882614,22.1475092 L10.5943304,22.1475092 L10.5943304,18.3591195 C10.5945701,18.1857282 10.4589243,18.0425466 10.2857732,18.0334208 L10.2857732,18.0334208 Z M11.5885678,10.6452037 C12.0469519,10.708019 12.3885619,11.0996346 12.3885619,11.5623026 C12.3885619,12.0249706 12.0469519,12.4165862 11.5885678,12.4794015 L11.5885678,12.4794015 L5.14316266,12.4794015 C4.68477863,12.4165862 4.34316859,12.0249706 4.34316859,11.5623026 C4.34316859,11.0996346 4.68477863,10.708019 5.14316266,10.6452037 L5.14316266,10.6452037 L11.5885678,10.6452037 Z M11.5885678,5.65687155 C12.0469519,5.7196868 12.3885619,6.11130243 12.3885619,6.57397042 C12.3885619,7.03663842 12.0469519,7.42825402 11.5885678,7.4910693 L11.5885678,7.4910693 L5.14316266,7.4910693 C4.68477863,7.42825402 4.34316859,7.03663842 4.34316859,6.57397042 C4.34316859,6.11130243 4.68477863,5.7196868 5.14316266,5.65687155 L5.14316266,5.65687155 L11.5885678,5.65687155 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Company.displayName = 'Company';
export default Company;
