import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StepOne = ({
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
          id="1110-第1步"
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
              d="M12,23.0769231 C18.1172308,23.0769231 23.0769231,18.1172308 23.0769231,12 C23.0769231,5.88276921 18.1172308,0.923076914 12,0.923076914 C5.88276923,0.923076914 0.923076914,5.88276923 0.923076914,12 C0.923076914,18.1172308 5.88276921,23.0769231 12,23.0769231 L12,23.0769231 Z M12,24 C5.3723077,24 0,18.6276923 0,12 C0,5.3723077 5.3723077,0 12,0 C18.6276923,0 24,5.3723077 24,12 C24,18.6276923 18.6276923,24 12,24 Z M12.2030769,7.3883077 L13.0301539,7.3883077 L13.0301539,16.6153846 L11.9704615,16.6153846 L11.9704615,8.68061538 C11.3889231,9.27507691 10.6652308,9.68861538 9.79938462,9.94707691 L9.79938462,8.88738462 C10.2521922,8.75831301 10.686523,8.57155076 11.0916923,8.3316923 C11.5034541,8.06940166 11.8773847,7.75199542 12.2030769,7.3883077 L12.2030769,7.3883077 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StepOne.displayName = 'StepOne';
export default StepOne;
