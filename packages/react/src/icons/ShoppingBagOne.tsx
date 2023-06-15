import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShoppingBagOne = ({
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
          id="114.购物袋2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="购物袋2"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.9999496,0 C13.7401236,0 15.9732651,2.19906418 16.0733561,4.95005291 L16.0768579,5.14285714 L19.4614634,5.14285714 C19.8627356,5.14285714 20.2037439,5.42717702 20.2878539,5.81555347 L20.3034155,5.9147111 L21.9957183,23.0575682 C22.0422092,23.5285169 21.7045629,23.9413242 21.2523291,23.9942721 L21.1537662,24 L0.846133024,24 C0.378904748,24 0.00701054697,23.6185893 0,23.1574859 L0.00418093552,23.0575682 L1.6964837,5.9147111 C1.73641176,5.51024374 2.04962437,5.19481097 2.43948704,5.14867617 L2.53843579,5.14285714 L5.92304132,5.14285714 C5.92304132,2.30253556 8.19605058,0 10.9999496,0 Z M18.6948503,6.85714286 L16.0767755,6.85714286 L16.0768579,9.42857143 C16.0768579,9.90195832 15.6980231,10.2857143 15.2307065,10.2857143 C14.7633901,10.2857143 14.3845551,9.90195832 14.3845551,9.42857143 L14.3844727,6.85714286 L7.61526166,6.85714286 L7.61534408,9.42857143 C7.61534408,9.90195832 7.23650925,10.2857143 6.7691927,10.2857143 C6.30187624,10.2857143 5.92304132,9.90195832 5.92304132,9.42857143 L5.9229589,6.85714286 L3.30420279,6.85714286 L1.7811303,22.2857143 L20.2179228,22.2857143 L18.6948503,6.85714286 Z M10.9999496,1.71428571 C9.18732802,1.71428571 7.70750781,3.15768727 7.61948625,4.97173684 L7.61534408,5.14285714 L14.3845551,5.14285714 C14.3845551,3.24930942 12.8692156,1.71428571 10.9999496,1.71428571 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShoppingBagOne.displayName = 'ShoppingBagOne';
export default ShoppingBagOne;
