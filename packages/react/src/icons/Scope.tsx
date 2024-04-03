import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Scope = ({
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
          d="M593.624919 437.572216L928.630175 641.08515L764.078413 668.521559L883.611116 875.60985L829.484525 906.85985L709.875616 699.653559L603.87065 828.58515L593.624919 437.572216zM906.25 125C923.508897 125 937.5 138.991102 937.5 156.25L937.5 406.25L531.25 406.25L531.25 875L93.75 875C76.491102 875 62.5 861.008897 62.5 843.75L62.5 156.25C62.5 138.991102 76.491102 125 93.75 125L906.25 125zM468.75 656.25L125 656.25L125 812.5L468.75 812.5L468.75 656.25zM468.75 406.25L125 406.25L125 593.75L468.75 593.75L468.75 406.25zM468.75 187.5L125 187.5L125 343.75L468.75 343.75L468.75 187.5zM875 187.5L531.25 187.5L531.25 343.75L875 343.75L875 187.5z"
          fill="#666666"
        ></path>
      </svg>
    </IconWrapper>
  );
};
Scope.displayName = 'Scope';
export default Scope;
