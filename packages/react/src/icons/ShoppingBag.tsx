import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShoppingBag = ({
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
          id="116.购物袋"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="购物袋"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.0833333,0 C21.5895943,0 22,0.413275628 22,0.923076923 L22,0.923076923 L22,23.0769231 C22,23.5867243 21.5895943,24 21.0833333,24 L21.0833333,24 L0.916666667,24 C0.410405659,24 0,23.5867243 0,23.0769231 L0,23.0769231 L0,0.923076923 C0,0.413275628 0.410405659,0 0.916666667,0 L0.916666667,0 L21.0833333,0 Z M20.1666667,1.84615385 L1.83333333,1.84615385 L1.83333333,22.1538462 L20.1666667,22.1538462 L20.1666667,1.84615385 Z M16.5,3.69230769 C16.9700995,3.69230769 17.3575483,4.04865248 17.4104996,4.50773435 L17.4166667,4.61538462 C17.4166667,8.18399374 14.5438271,11.0769231 11,11.0769231 C7.5300026,11.0769231 4.7033262,8.30327687 4.58705409,4.83752286 L4.58333333,4.61538462 L4.58950043,4.50773435 C4.64245176,4.04865248 5.02990048,3.69230769 5.5,3.69230769 C5.97009949,3.69230769 6.35754827,4.04865248 6.4104996,4.50773435 L6.41666667,4.61538462 C6.41666667,7.16439112 8.46869493,9.23076923 11,9.23076923 C13.4646918,9.23076923 15.4749999,7.2717169 15.5790988,4.81559043 L15.5833333,4.61538462 L15.5895004,4.50773435 C15.6424517,4.04865248 16.0299005,3.69230769 16.5,3.69230769 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShoppingBag.displayName = 'ShoppingBag';
export default ShoppingBag;
