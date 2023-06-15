import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ChefHat = ({
  size = '1em',
  fill = 'currentColor',
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
          id="12.厨师帽"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="厨师帽"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.5,16.5 L19.5,19.5 C19.5,20.3284271 18.8284271,21 18,21 L6,21 C5.17157287,21 4.5,20.3284271 4.5,19.5 L4.5,16.5 L19.5,16.5 Z M12,0 C14.4070194,0 16.2346645,1.15874846 17.4829355,3.47624539 C18.0899086,3.17148473 18.7749281,3 19.5,3 C21.9852814,3 24,5.01471862 24,7.5 C24,9.98528138 21.9852814,12 19.5,12 L19.4158339,11.9992287 L19.4158339,11.9992287 C19.4721092,12.9433132 19.5,13.9437659 19.5,15 L4.5,15 C4.5,13.9437659 4.52789076,12.9433132 4.5836723,11.9986421 L4.5,12 C2.01471862,12 0,9.98528138 0,7.5 C0,5.01471862 2.01471862,3 4.5,3 C5.22507192,3 5.91009144,3.17148473 6.51671364,3.47610926 C7.76533546,1.15874846 9.5929806,0 12,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ChefHat.displayName = 'ChefHat';
export default ChefHat;
