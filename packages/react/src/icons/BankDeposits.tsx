import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankDeposits = ({
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
          id="802.银行存款"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,0 L26.5263158,0 C27.3402091,0 28,0.659790895 28,1.47368421 L28,5.89473684 L0,5.89473684 L0,1.47368421 C0,0.659790895 0.659790895,0 1.47368421,0 Z M0,7.36842105 L28,7.36842105 L28,19.1578947 C28,19.9717881 27.3402091,20.6315789 26.5263158,20.6315789 L1.47368421,20.6315789 C0.659790895,20.6315789 0,19.9717881 0,19.1578947 L0,7.36842105 Z M16.2105263,16.2105263 L16.2105263,17.6842105 L25.0526316,17.6842105 L25.0526316,16.2105263 L16.2105263,16.2105263 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankDeposits.displayName = 'BankDeposits';
export default BankDeposits;
