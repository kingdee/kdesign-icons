import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const IncomeContracts = ({
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
          id="957.收入合同"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M22.5669354,0 C23.3978269,0 24.0713977,0.673570755 24.0713977,1.50446236 L24.0722503,12.9869773 C14.992611,11.5906652 12.8301502,20.9912912 12.8221724,21.024838 C12.8134859,21.061365 11.2989534,21.061365 8.27857488,21.024838 L11.57082,25.5758601 L1.50446236,25.5758601 C0.673570755,25.5758601 0,24.9022893 0,24.0713977 L0,1.50446236 C0,0.673570755 0.673570755,0 1.50446236,0 L22.5669354,0 Z M24.0701942,14.4987212 L24.0713977,24.0713977 C24.0713977,24.9022893 23.3978269,25.5758601 22.5669354,25.5758601 L18.7681679,25.5758601 L22.2675329,21.024838 L18.1663846,21.024838 C18.6002984,17.7810458 20.5682349,15.6056734 24.0701942,14.4987212 Z M12.0356989,13.5401612 L4.51338708,13.5401612 L4.51338708,15.0446236 L12.0356989,15.0446236 L12.0356989,13.5401612 Z M15.0446236,9.02677416 L4.51338708,9.02677416 L4.51338708,10.5312365 L15.0446236,10.5312365 L15.0446236,9.02677416 Z M19.5580107,4.51338708 L4.51338708,4.51338708 L4.51338708,6.01784944 L19.5580107,6.01784944 L19.5580107,4.51338708 Z M15.3101839,28 L19.1694724,22.5969962 L16.8538994,22.5969962 C16.8538994,15.1918017 22.1357065,14.2459726 23.4866132,14.1249457 C14.5547664,14.3243985 14.5383263,22.5969962 14.5383263,22.5969962 L11.4509144,22.5969962 L15.3101839,28 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
IncomeContracts.displayName = 'IncomeContracts';
export default IncomeContracts;
