import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CheckboxUnchecked = ({
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
          id="199.问券多选选中"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="问券多选选中"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21.3333333,0 C22.8060927,0 24,1.19390733 24,2.66666666 L24,21.3333333 C24,22.8060927 22.8060927,24 21.3333333,24 L2.66666666,24 C1.19390733,24 0,22.8060927 0,21.3333333 L0,2.66666666 C0,1.19390733 1.19390733,0 2.66666666,0 L21.3333333,0 Z M16.2474201,7.0081737 L10.0598336,14.0797009 L7.80004797,11.0666536 C7.4686791,10.6248284 6.84188157,10.535286 6.40005642,10.8666548 C5.9582313,11.1980236 5.8686888,11.8248212 6.20005763,12.2666463 L9.20003952,16.2666219 C9.5813784,16.7750739 10.3340844,16.8034375 10.7526068,16.3251261 L17.7525645,8.32517488 C18.1162444,7.90954077 18.0741271,7.27778202 17.6584929,6.91410218 C17.2428588,6.55042234 16.6111,6.59253958 16.2474201,7.0081737 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CheckboxUnchecked.displayName = 'CheckboxUnchecked';
export default CheckboxUnchecked;
