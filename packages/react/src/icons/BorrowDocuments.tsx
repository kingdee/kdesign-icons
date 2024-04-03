import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BorrowDocuments = ({
  size = '1em',
  fill = 'currentColor',
  rotate = 0,
  spin = false,
  ...restProps
}: SvgIconProps) => {
  return (
    <IconWrapper rotate={rotate} spin={spin} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        width={size}
        height={size}
      >
        <path
          d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C418.043556 937.5 341.350519 914.964669 275.779341 875.752456C623.80275 892.442734 642.006559 524.403778 642.006559 524.403778L739.153619 524.403778C779.787938 515.67065 755.032038 482.398141 755.032038 482.398141L555.469172 251.294962C520.175778 200.484019 493.615513 247.830579 493.615513 247.830579L295.784838 475.469378C262.223633 521.011572 313.467622 524.475953 313.467622 524.475953L403.541569 524.475953C460.325272 705.572988 294.669116 802.817416 220.321063 836.421919C123.879425 756.179809 62.5 635.257872 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
BorrowDocuments.displayName = 'BorrowDocuments';
export default BorrowDocuments;
