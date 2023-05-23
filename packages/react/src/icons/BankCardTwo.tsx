import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BankCardTwo = ({
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
          id="1341-银行卡"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.33333334,3.75200002 L22.6666667,3.75200002 L22.6666667,3.33333334 C22.6666667,2.80290037 22.455953,2.29419254 22.0808802,1.91911978 C21.7058075,1.54404702 21.1970997,1.33333334 20.6666667,1.33333334 L3.33333334,1.33333334 C2.80290035,1.33333334 2.29419252,1.54404702 1.91911976,1.91911978 C1.54404701,2.29419254 1.33333334,2.80290037 1.33333334,3.33333334 L1.33333334,3.75200002 L1.33333334,3.75200002 Z M1.33333334,8.00000002 L1.33333334,15.3333334 C1.33333334,16.4379028 2.22876383,17.3333333 3.33333334,17.3333333 L20.6666667,17.3333333 C21.7712362,17.3333333 22.6666667,16.4379028 22.6666667,15.3333334 L22.6666667,8.00000002 L1.33333334,8.00000002 L1.33333334,8.00000002 Z M3.33333333,0 L20.6666667,0 C21.5507216,0 22.398568,0.351189471 23.0236893,0.976310736 C23.6488105,1.601432 24,2.44927838 24,3.33333335 L24,15.3333334 C24,17.1742825 22.5076158,18.6666667 20.6666667,18.6666667 L3.33333333,18.6666667 C1.49238416,18.6666667 1.48029745e-16,17.1742825 1.48029745e-16,15.3333334 L1.48029745e-16,3.33333335 C1.48029745e-16,2.44927838 0.351189458,1.601432 0.97631072,0.976310736 C1.60143198,0.351189471 2.44927836,0 3.33333333,0 L3.33333333,0 Z M16.488,15.0186667 L19.6133333,15.0186667 L19.816,13.8 L16.6933333,13.8 L16.4893333,15.0186667 L16.488,15.0186667 Z M16.2093333,12.4666667 L20.7426667,12.4666667 C21.1,12.4666667 21.3426667,12.756 21.2826667,13.1146667 L20.8506667,15.7053334 C20.7809906,16.0712115 20.4669221,16.3398591 20.0946667,16.352 L15.5613333,16.352 C15.204,16.352 14.9626667,16.0626667 15.0226667,15.7053334 L15.4533333,13.1146667 C15.5224588,12.7482608 15.8366659,12.4789403 16.2093333,12.4666667 Z M1.33333334,5.08533335 L1.33333334,6.66666668 L22.6666667,6.66666668 L22.6666667,5.08533335 L1.33333334,5.08533335 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BankCardTwo.displayName = 'BankCardTwo';
export default BankCardTwo;
