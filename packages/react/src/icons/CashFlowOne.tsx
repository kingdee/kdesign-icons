import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CashFlowOne = ({
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
          id="843.现金流量"
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
              d="M14,28 C8.99828183,28 4.37650352,25.331615 1.87564437,21 C-0.625214789,16.6683848 -0.625214789,11.331615 1.87564437,7 C4.37650352,2.66838481 8.99828183,0 14,0 C21.7319865,0 28,6.26801346 28,14 C28,21.7319863 21.7319865,28 14,28 L14,28 Z M16.2105264,7.368421 L16.2105264,19.1578946 L17.6842106,19.1578946 L17.6842106,7.368421 L16.2105264,7.368421 Z M7.36842121,10.3157894 L7.36842121,19.1578946 L8.84210541,19.1578946 L8.84210541,10.3157894 L7.36842121,10.3157894 Z M11.7894738,13.2631578 L11.7894738,19.1578946 L13.263158,19.1578946 L13.263158,13.2631578 L11.7894738,13.2631578 L11.7894738,13.2631578 Z M20.631579,10.3157894 L20.631579,19.1578946 L22.1052632,19.1578946 L22.1052632,10.3157894 L20.631579,10.3157894 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CashFlowOne.displayName = 'CashFlowOne';
export default CashFlowOne;
