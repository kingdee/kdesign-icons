import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CollaborationAndTools = ({
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
          d="M625 875C625 909.53125 597 937.5 562.5 937.5L125 937.5C90.46875 937.5 62.5 909.53125 62.5 875L62.5 437.5C62.5 403 90.46875 375 125 375L343.75 375L343.75 125C343.75 92.068182 369.233922 65.058884 401.583881 62.671535L406.25 62.5L875 62.5C909.5 62.5 937.5 90.5 937.5 125L937.5 593.75C937.5 628.28125 909.5 656.25 875 656.25L625 656.25L625 875zM562.5 656.25L406.25 656.25C371.71875 656.25 343.75 628.28125 343.75 593.75L343.75 437.5L125 437.5L125 875L562.5 875L562.5 656.25zM562.5 437.5L406.25 437.5L406.25 593.75L562.5 593.75L562.5 437.5zM625 593.75L875 593.75L875 125L406.25 125L406.25 375L562.5 375C597.017797 375 625 402.982203 625 437.5L625 593.75L625 593.75z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
CollaborationAndTools.displayName = 'CollaborationAndTools';
export default CollaborationAndTools;
