import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const MaterialClassification = ({
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
          id="1307-物料分类"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 8.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.33333333,12.4444444 C2.06971298,12.4444444 2.66666667,13.0413981 2.66666667,13.7777778 C2.66666667,14.5141574 2.06971298,15.1111111 1.33333333,15.1111111 C0.596953657,15.1111111 0,14.5141574 0,13.7777778 C0,13.0413981 0.596953657,12.4444444 1.33333333,12.4444444 Z M23.1111111,12.8888889 C23.6020308,12.8888889 24,13.286858 24,13.7777778 C24,14.2686975 23.6020308,14.6666667 23.1111111,14.6666667 L5.33333333,14.6666667 C4.84241357,14.6666667 4.44444444,14.2686975 4.44444444,13.7777778 C4.44444444,13.286858 4.84241357,12.8888889 5.33333333,12.8888889 L23.1111111,12.8888889 Z M1.33333333,6.22222222 C2.06971298,6.22222222 2.66666667,6.81917591 2.66666667,7.55555556 C2.66666667,8.2919352 2.06971298,8.88888889 1.33333333,8.88888889 C0.596953657,8.88888889 0,8.2919352 0,7.55555556 C0,6.81917591 0.596953657,6.22222222 1.33333333,6.22222222 Z M23.1111111,6.66666667 C23.6020308,6.66666667 24,7.06463582 24,7.55555556 C24,8.04647529 23.6020308,8.44444444 23.1111111,8.44444444 L5.33333333,8.44444444 C4.84241357,8.44444444 4.44444444,8.04647529 4.44444444,7.55555556 C4.44444444,7.06463582 4.84241357,6.66666667 5.33333333,6.66666667 L23.1111111,6.66666667 Z M1.33333333,0 C2.06971298,0 2.66666667,0.596953685 2.66666667,1.33333333 C2.66666667,2.06971301 2.06971298,2.66666667 1.33333333,2.66666667 C0.596953657,2.66666667 0,2.06971301 0,1.33333333 C0,0.596953685 0.596953657,0 1.33333333,0 Z M23.1111111,0.444444444 C23.6020308,0.444444444 24,0.842413568 24,1.33333333 C24,1.8242531 23.6020308,2.22222222 23.1111111,2.22222222 L5.33333333,2.22222222 C4.84241357,2.22222222 4.44444444,1.8242531 4.44444444,1.33333333 C4.44444444,0.842413568 4.84241357,0.444444444 5.33333333,0.444444444 L23.1111111,0.444444444 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
MaterialClassification.displayName = 'MaterialClassification';
export default MaterialClassification;
