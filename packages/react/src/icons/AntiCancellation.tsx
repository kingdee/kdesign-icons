import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AntiCancellation = ({
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
          id="1202-反撤销"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 9.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.713098,0 C19.7871281,0 19.858914,0.0254171475 19.9164503,0.0720007718 L23.8801762,3.28118233 C24.0188907,3.39349078 24.040297,3.59698508 23.9279885,3.73569954 C23.9163347,3.75009343 23.9034651,3.76345887 23.8895218,3.77564829 L19.9257961,7.24080674 C19.7914245,7.35827669 19.5872667,7.34457526 19.4697968,7.21020372 C19.4183088,7.15130768 19.3899324,7.07573441 19.3899324,6.99750557 L19.3899324,4.48392188 L11.3025054,4.48540393 C6.98043646,4.48540393 1.61582771,9.9984508 1.61582771,14.2878684 L5.29051224e-16,14.2878684 C5.29051224e-16,8.726613 5.74441735,2.87736739 11.3025054,2.87736739 L19.3899324,2.87617331 L19.3899324,0.323165537 C19.3899324,0.144686144 19.5346186,0 19.713098,0 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AntiCancellation.displayName = 'AntiCancellation';
export default AntiCancellation;
