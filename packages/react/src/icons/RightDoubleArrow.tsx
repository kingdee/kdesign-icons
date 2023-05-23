import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const RightDoubleArrow = ({
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
          id="1000.右双箭头"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12.0078,13.4648226 L0.301230526,1.75825317 C-0.0989074523,1.35343478 -0.100620236,0.702572429 0.297381606,0.295653688 C0.705241163,-0.100785477 1.35526396,-0.0982196079 1.75998108,0.301427085 L14.0092519,12.5526224 C14.2875916,12.7161557 14.4755059,12.9983607 14.5190568,13.3182348 C14.5626077,13.638109 14.4569794,13.9602798 14.2324907,14.1922734 L1.7811503,26.6436138 C1.37166947,27.0455873 0.71543385,27.0447306 0.307003957,26.6416894 C-0.0942866361,26.2335946 -0.0959962856,25.5796549 0.303155003,25.1694675 L12.0097244,13.4648226 L12.0078,13.4648226 Z M25.4791111,13.4648226 L13.7725417,1.75825317 C13.3724037,1.35343479 13.3706909,0.702572438 13.7686928,0.295653688 C14.1765523,-0.100785477 14.8265751,-0.0982196079 15.2312922,0.301427085 L27.480563,12.5526224 C27.7589028,12.7161557 27.946817,12.9983607 27.9903679,13.3182348 C28.0339189,13.638109 27.9282906,13.9602798 27.7038019,14.1922734 L15.2524614,26.6436138 C14.8429806,27.0455873 14.186745,27.0447306 13.7783151,26.6416894 C13.3770245,26.2335946 13.3753149,25.5796549 13.7744662,25.1694675 L25.4791111,13.4648226 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
RightDoubleArrow.displayName = 'RightDoubleArrow';
export default RightDoubleArrow;
