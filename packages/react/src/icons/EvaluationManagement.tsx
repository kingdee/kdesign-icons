import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const EvaluationManagement = ({
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
          id="931.评估管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M20.9856183,18.6516653 L27.5203921,25.1879125 C27.8287681,25.4966783 28.0013663,25.915617 28,26.352 C27.9986009,26.788383 27.8233513,27.2062195 27.5130248,27.5130248 C26.8714297,28.1519727 25.8350198,28.1552587 25.189386,27.5203921 L18.6531387,20.9841448 C13.7589372,24.6550722 6.85964186,23.9182343 2.85108811,19.2965016 C-1.15746563,14.6747689 -0.911440595,7.74060152 3.41458046,3.41458046 C7.74060152,-0.911440595 14.6747689,-1.15746563 19.2965016,2.85108811 C23.9182343,6.85964186 24.6550722,13.7589372 20.9841448,18.6531387 L20.9856183,18.6516653 Z M11.9960681,14.1134233 L18.8373206,10.0525807 L18.1241683,8.84876783 L12.2274006,12.3482239 L9.12725087,9.17587489 L4.86454498,12.01817 L5.64105587,13.1821996 L8.93717515,10.9852779 L11.9975416,14.1134233 L11.9960681,14.1134233 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
EvaluationManagement.displayName = 'EvaluationManagement';
export default EvaluationManagement;
