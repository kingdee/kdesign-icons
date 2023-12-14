import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LineNameLineNumber = ({
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
          id="1303-行名行号"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.0769231,22.1533846 C23.5867243,22.1533846 24,22.5666603 24,23.0764615 C24,23.5862628 23.5867243,23.9995385 23.0769231,23.9995385 L23.0769231,23.9995385 L0.923076923,23.9995385 C0.413275628,23.9995385 0,23.5862628 0,23.0764615 C0,22.5666603 0.413275628,22.1533846 0.923076923,22.1533846 L0.923076923,22.1533846 L23.0769231,22.1533846 Z M12.5429538,0.175846154 L22.6968,7.56046154 C23.0198769,7.79584615 23.1555692,8.21215385 23.0318769,8.59246154 C22.9081846,8.97276923 22.5537231,9.23030769 22.1540308,9.23030769 L21.2307692,9.22984615 L21.2307692,19.3836923 L22.1538462,19.3841538 C22.6272331,19.3841538 23.0173913,19.7404986 23.0707129,20.1995805 L23.0771435,20.3072308 C23.0771435,20.817032 22.6636474,21.2303077 22.1538462,21.2303077 L22.1538462,21.2303077 L1.84615385,21.2303077 C1.33635255,21.2303077 0.923076923,20.817032 0.923076923,20.3072308 C0.923076923,19.7974295 1.33635255,19.3841538 1.84615385,19.3841538 L1.84615385,19.3841538 L2.76923077,19.3836923 L2.76923077,9.22984615 L1.84633846,9.23030769 C1.44664615,9.23030769 1.09218462,8.97276923 0.968492308,8.59246154 C0.8448,8.21215385 0.979569231,7.79584615 1.30264615,7.56046154 L11.4564923,0.175846154 C11.7804923,-0.0586153846 12.2198769,-0.0586153846 12.5429538,0.175846154 Z M8.30769231,9.22984615 L4.61538462,9.22984615 L4.61538462,19.3836923 L8.30769231,19.3836923 L8.30769231,9.22984615 Z M13.8461538,9.22984615 L10.1538462,9.22984615 L10.1538462,19.3836923 L13.8461538,19.3836923 L13.8461538,9.22984615 Z M19.3846154,9.22984615 L15.6923077,9.22984615 L15.6923077,19.3836923 L19.3846154,19.3836923 L19.3846154,9.22984615 Z M12.0001846,2.06353846 L4.6848,7.38415385 L19.3155692,7.38415385 L12.0001846,2.06353846 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LineNameLineNumber.displayName = 'LineNameLineNumber';
export default LineNameLineNumber;
