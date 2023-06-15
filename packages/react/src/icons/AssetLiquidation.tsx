import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const AssetLiquidation = ({
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
          id="906.资产清算"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M17.1111111,20.2222222 L17.1111111,23.3333333 L22.5555556,23.3333333 C22.9851104,23.3333333 23.3333333,23.6815563 23.3333333,24.1111111 C23.3333333,24.5406659 22.9851104,24.8888889 22.5555556,24.8888889 L5.44444444,24.8888889 C5.01488964,24.8888889 4.66666667,24.5406659 4.66666667,24.1111111 C4.66666667,23.6815563 5.01488964,23.3333333 5.44444444,23.3333333 L10.8888889,23.3333333 L10.8888889,20.2222222 L1.55555556,20.2222222 C1.14299657,20.2222222 0.747334929,20.0583338 0.455611674,19.7666105 C0.163888418,19.4748873 5.75671198e-16,19.0792257 5.75671198e-16,18.6666667 L5.75671198e-16,1.55555556 C5.75671198e-16,0.696445945 0.696445945,-1.1513424e-15 1.55555556,-1.1513424e-15 L26.4444444,-1.1513424e-15 C27.3035541,-1.1513424e-15 28,0.696445945 28,1.55555556 L28,18.6666667 C28,19.5257763 27.3035541,20.2222222 26.4444444,20.2222222 L17.1111111,20.2222222 Z M4.66666667,4.66666667 L4.66666667,7.77777778 L7.77777778,7.77777778 L7.77777778,4.66666667 L4.66666667,4.66666667 Z M4.66666667,10.8888889 L4.66666667,14 L7.77777778,14 L7.77777778,10.8888889 L4.66666667,10.8888889 Z M10.8888889,6.22222222 L10.8888889,7.77777778 L23.3333333,7.77777778 L23.3333333,6.22222222 L10.8888889,6.22222222 Z M10.8888889,12.4444444 L10.8888889,14 L23.3333333,14 L23.3333333,12.4444444 L10.8888889,12.4444444 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
AssetLiquidation.displayName = 'AssetLiquidation';
export default AssetLiquidation;
