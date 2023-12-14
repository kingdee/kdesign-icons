import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SmallK = ({
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
          id="1167-小K"
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
              d="M12,0 C18.627417,0 24,5.37258299 24,12 C24,18.627417 18.627417,24 12,24 C5.37258299,24 0,18.627417 0,12 C0,5.37258299 5.37258299,0 12,0 Z M12,1.6 C6.25623859,1.6 1.6,6.25623859 1.6,12 C1.6,17.7437614 6.25623859,22.4 12,22.4 C17.7437614,22.4 22.4,17.7437614 22.4,12 C22.4,6.25623859 17.7437614,1.6 12,1.6 Z M18.4,9.6 C19.7254834,9.6 20.8,10.6745166 20.8,12 C20.8,13.3254834 19.7254834,14.4 18.4,14.4 L5.6,14.4 C4.27451661,14.4 3.2,13.3254834 3.2,12 C3.2,10.6745166 4.27451661,9.6 5.6,9.6 L18.4,9.6 Z M6,11.2 C5.55817221,11.2 5.2,11.5581722 5.2,12 C5.2,12.4418278 5.55817221,12.8 6,12.8 C6.44182779,12.8 6.8,12.4418278 6.8,12 C6.8,11.5581722 6.44182779,11.2 6,11.2 Z M14,11.2 C13.5581722,11.2 13.2,11.5581722 13.2,12 C13.2,12.4418278 13.5581722,12.8 14,12.8 C14.4418278,12.8 14.8,12.4418278 14.8,12 C14.8,11.5581722 14.4418278,11.2 14,11.2 Z M10,11.2 C9.55817224,11.2 9.2,11.5581722 9.2,12 C9.2,12.4418278 9.55817224,12.8 10,12.8 C10.4418278,12.8 10.8,12.4418278 10.8,12 C10.8,11.5581722 10.4418278,11.2 10,11.2 Z M18,11.2 C17.5581722,11.2 17.2,11.5581722 17.2,12 C17.2,12.4418278 17.5581722,12.8 18,12.8 C18.4418278,12.8 18.8,12.4418278 18.8,12 C18.8,11.5581722 18.4418278,11.2 18,11.2 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SmallK.displayName = 'SmallK';
export default SmallK;
