import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const VoidBill = ({
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
          id="238.发票作废"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="发票作废"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.3333333,0 C19.2538079,0 20,0.741045928 20,1.65517241 L20,24 L17.6115922,22.3296028 L15.0964868,24 L12.5946487,22.3296028 L10.1025237,24 L7.60129509,22.3296028 L5.09126651,24 L2.55847925,22.3296028 L0,24 L0,1.65517241 C0,0.741045928 0.74619208,0 1.66666667,0 L18.3333333,0 Z M6.46446608,6.07708615 C6.13902917,5.75389363 5.61139168,5.75389363 5.28595483,6.07708615 C4.98555149,6.37541768 4.96244355,6.84485032 5.21663091,7.1695051 L5.28595483,7.24746976 L8.82148867,10.7574503 L5.28595483,14.2697716 C4.96051789,14.5929641 4.96051789,15.1169628 5.28595483,15.4401552 C5.58635808,15.7384868 6.05905067,15.7614353 6.38596,15.509001 L6.46446608,15.4401552 L10,11.9278339 L13.5355339,15.4401552 C13.8609708,15.7633477 14.3886083,15.7633477 14.7140452,15.4401552 C15.0144485,15.1418237 15.0375564,14.6723911 14.7833691,14.3477363 L14.7140452,14.2697716 L11.1785113,10.7574503 L14.7140452,7.24746976 C15.0394821,6.92427725 15.0394821,6.40027866 14.7140452,6.07708615 C14.4136419,5.77875459 13.9409493,5.755806 13.61404,6.0082404 L13.5355339,6.07708615 L10,9.58706664 L6.46446608,6.07708615 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
VoidBill.displayName = 'VoidBill';
export default VoidBill;
