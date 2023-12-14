import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BillingStatistics = ({
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
          id="393.开票统计"
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
              d="M11.5751813,0.84960599 C11.7190307,0.84960599 11.8622673,0.852229999 12.0048458,0.857432747 L12.0038917,11.9960769 L19.3448281,21.0049648 C17.2907467,22.8661432 14.5653736,23.9999686 11.5751813,23.9999686 C5.1823852,23.9999686 0,18.8175834 0,12.4247873 C0,6.03199119 5.1823852,0.84960599 11.5751813,0.84960599 Z M24,11.9958443 C23.8804117,15.2822135 22.3907847,18.2190186 20.0852497,20.2521286 L12.8613126,11.9960769 L24,11.9958443 Z M12.86194,0 C18.9134233,0.22065263 23.7794274,5.08672192 23.9999761,11.1382319 L12.8613126,11.1386561 L12.86194,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BillingStatistics.displayName = 'BillingStatistics';
export default BillingStatistics;
