import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BellSolid = ({
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
          id="29.铃铛、钟"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="铃铛、钟"
            transform="translate(5.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.001131,24 C9.42453143,24 8.09974889,22.907659 7.72385919,21.429224 L14.2784028,21.429224 C13.9025131,22.907659 12.5777305,24 11.001131,24 Z M0.84771946,20.5714286 C0.0939931233,20.5714286 -0.283474429,19.6481641 0.249490586,19.1081942 L1.69374282,17.6449598 L1.69374282,11.1428571 C1.69374282,6.22399373 5.41156461,2.18488699 10.1555425,1.75257976 L10.1555425,0.857142857 C10.1555425,0.383755941 10.5343785,0 11.0016964,0 C11.4690142,0 11.8478502,0.383755941 11.8478502,0.857142857 L11.8478502,1.75288956 C16.5902078,2.18681285 20.3062572,6.22516638 20.3062572,11.1428571 L20.3062572,17.6449598 L21.7505094,19.1081942 C22.2834744,19.6481641 21.9060069,20.5714286 21.1522805,20.5714286 L0.84771946,20.5714286 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BellSolid.displayName = 'BellSolid';
export default BellSolid;
