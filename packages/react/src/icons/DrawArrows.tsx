import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DrawArrows = ({
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
          id="985.画箭头"
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
              d="M26.1090875,3.08218739 L1.64067969,27.5505952 C1.40542024,27.8058371 1.04920935,27.9116338 0.712764646,27.8261915 C0.376319943,27.7407491 0.113752139,27.4778094 0.0287860705,27.141244 C-0.0561799978,26.8046787 0.0501208414,26.448618 0.305695483,26.21372 L24.6266121,1.89091251 L8.14541872,1.89091251 C7.62325764,1.89091251 7.19996246,1.46761732 7.19996246,0.945456254 C7.19996246,0.423295183 7.62325764,1.25960076e-15 8.14541872,1.25960076e-15 L27.0545438,1.25960076e-15 C27.5767048,1.25960076e-15 28,0.423295176 28,0.945456237 L28,17.9636688 C28,18.4858298 27.5767048,18.909125 27.0545437,18.909125 C26.5323827,18.909125 26.1090875,18.4858298 26.1090875,17.9636688 L26.1090875,3.08218739 Z"
              id="路径"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DrawArrows.displayName = 'DrawArrows';
export default DrawArrows;
