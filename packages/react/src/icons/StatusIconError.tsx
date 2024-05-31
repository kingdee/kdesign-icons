import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StatusIconError = ({
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
          d="M500 62.5C741.624578 62.5 937.5 258.375422 937.5 500C937.5 741.624578 741.624578 937.5 500 937.5C258.375422 937.5 62.5 741.624578 62.5 500C62.5 258.375422 258.375422 62.5 500 62.5zM645.624519 333.124519C642.786366 330.286366 638.259344 330.060631 635.152931 332.602369L635.152931 332.602369L500 443.1875L364.847069 332.602369C361.740656 330.060631 357.213634 330.286366 354.375481 333.124519L354.375481 333.124519L333.124519 354.375481C330.286366 357.213634 330.060631 361.740656 332.602369 364.847069L332.602369 364.847069L443.1875 500L332.602369 635.152931C330.060631 638.259344 330.286366 642.786366 333.124519 645.624519L333.124519 645.624519L354.375481 666.875481C357.213634 669.713634 361.740656 669.939369 364.847069 667.397631L364.847069 667.397631L500 556.8125L635.152931 667.397631C638.259344 669.939369 642.786366 669.713634 645.624519 666.875481L645.624519 666.875481L666.875481 645.624519C669.713634 642.786366 669.939369 638.259344 667.397631 635.152931L667.397631 635.152931L556.8125 500L667.397631 364.847069C669.939369 361.740656 669.713634 357.213634 666.875481 354.375481L666.875481 354.375481z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
StatusIconError.displayName = 'StatusIconError';
export default StatusIconError;