import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExpandOne = ({
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
          id="1195-展开"
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
              d="M0.923076923,19.3846154 C0.413275658,19.3846154 0,19.797891 0,20.3076923 C0,20.8174936 0.413275658,21.2307692 0.923076923,21.2307692 L23.0769231,21.2307692 C23.5867244,21.2307692 24,20.8174936 24,20.3076923 C24,19.797891 23.5867244,19.3846154 23.0769231,19.3846154 L0.923076923,19.3846154 Z M16.3088766,6.28967713 C16.2077889,6.44130869 16.1538462,6.61946963 16.1538462,6.80170808 L16.1538462,14.4290611 C16.1538462,14.9388625 16.5671218,15.3521381 17.0769231,15.3521381 C17.2591615,15.3521381 17.4373225,15.2981953 17.588954,15.1971076 L23.3094688,11.383431 C23.7336492,11.1006441 23.8482712,10.527534 23.5654843,10.1033537 C23.4978829,10.0019515 23.410871,9.91493964 23.3094688,9.84733818 L17.588954,6.03366168 C17.1647737,5.75087474 16.5916636,5.86549679 16.3088766,6.28967713 Z M0.923076923,12.9230769 C0.413275658,12.9230769 0,13.3363526 0,13.8461538 C0,14.3559551 0.413275658,14.7692308 0.923076923,14.7692308 L11.0769231,14.7692308 C11.5867243,14.7692308 12,14.3559551 12,13.8461538 C12,13.3363526 11.5867243,12.9230769 11.0769231,12.9230769 L0.923076923,12.9230769 Z M0.923076923,6.46153846 C0.413275658,6.46153846 0,6.87481412 0,7.38461538 C0,7.89441665 0.413275658,8.30769231 0.923076923,8.30769231 L11.0769231,8.30769231 C11.5867243,8.30769231 12,7.89441665 12,7.38461538 C12,6.87481412 11.5867243,6.46153846 11.0769231,6.46153846 L0.923076923,6.46153846 Z M0.923076923,0 C0.413275658,0 0,0.413275628 0,0.923076923 C0,1.43287822 0.413275658,1.84615385 0.923076923,1.84615385 L23.0769231,1.84615385 C23.5867244,1.84615385 24,1.43287822 24,0.923076923 C24,0.413275628 23.5867244,0 23.0769231,0 L0.923076923,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExpandOne.displayName = 'ExpandOne';
export default ExpandOne;
