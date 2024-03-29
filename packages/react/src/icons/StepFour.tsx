import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const StepFour = ({
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
          id="1113-第4步"
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
              d="M12,23.0769231 C18.1172308,23.0769231 23.0769231,18.1172308 23.0769231,12 C23.0769231,5.88276921 18.1172308,0.923076914 12,0.923076914 C5.88276923,0.923076914 0.923076914,5.88276923 0.923076914,12 C0.923076914,18.1172308 5.88276921,23.0769231 12,23.0769231 L12,23.0769231 Z M12,24 C5.3723077,24 0,18.6276923 0,12 C0,5.3723077 5.3723077,0 12,0 C18.6276923,0 24,5.3723077 24,12 C24,18.6276923 18.6276923,24 12,24 Z M13.2701539,7.3883077 L14.2652308,7.3883077 L14.2652308,13.656 L15.7643077,13.656 L15.7643077,14.5218461 L14.2652308,14.5218461 L14.2652308,16.6153846 L13.2572308,16.6153846 L13.2572308,14.5218461 L8.61784615,14.5218461 L8.61784615,13.5138461 L13.2701539,7.3883077 Z M13.2184615,8.77107691 L9.50953847,13.656 L13.2572308,13.656 L13.2572308,8.77107691 L13.2184615,8.77107691 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
StepFour.displayName = 'StepFour';
export default StepFour;
