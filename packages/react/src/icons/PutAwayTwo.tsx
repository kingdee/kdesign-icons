import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const PutAwayTwo = ({
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
          id="1194-收起"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.0769231,19.3846154 C23.5867243,19.3846154 24,19.797891 24,20.3076923 C24,20.8174936 23.5867243,21.2307692 23.0769231,21.2307692 L0.923076923,21.2307692 C0.413275628,21.2307692 0,20.8174936 0,20.3076923 C0,19.797891 0.413275628,19.3846154 0.923076923,19.3846154 L23.0769231,19.3846154 Z M7.69112336,6.28967713 C7.79221109,6.44130869 7.84615385,6.61946963 7.84615385,6.80170808 L7.84615385,14.4290611 C7.84615385,14.9388625 7.43287819,15.3521381 6.92307692,15.3521381 C6.74083847,15.3521381 6.5626775,15.2981953 6.41104598,15.1971076 L0.69053119,11.383431 C0.266350848,11.1006441 0.151728827,10.527534 0.434515702,10.1033537 C0.5021171,10.0019515 0.589129049,9.91493964 0.69053119,9.84733818 L6.41104598,6.03366168 C6.83522632,5.75087474 7.40833642,5.86549679 7.69112336,6.28967713 Z M23.0769231,12.9230769 C23.5867243,12.9230769 24,13.3363526 24,13.8461538 C24,14.3559551 23.5867243,14.7692308 23.0769231,14.7692308 L12.9230769,14.7692308 C12.4132757,14.7692308 12,14.3559551 12,13.8461538 C12,13.3363526 12.4132757,12.9230769 12.9230769,12.9230769 L23.0769231,12.9230769 Z M23.0769231,6.46153846 C23.5867243,6.46153846 24,6.87481412 24,7.38461538 C24,7.89441665 23.5867243,8.30769231 23.0769231,8.30769231 L12.9230769,8.30769231 C12.4132757,8.30769231 12,7.89441665 12,7.38461538 C12,6.87481412 12.4132757,6.46153846 12.9230769,6.46153846 L23.0769231,6.46153846 Z M23.0769231,0 C23.5867243,0 24,0.413275628 24,0.923076923 C24,1.43287822 23.5867243,1.84615385 23.0769231,1.84615385 L0.923076923,1.84615385 C0.413275628,1.84615385 0,1.43287822 0,0.923076923 C0,0.413275628 0.413275628,0 0.923076923,0 L23.0769231,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
PutAwayTwo.displayName = 'PutAwayTwo';
export default PutAwayTwo;