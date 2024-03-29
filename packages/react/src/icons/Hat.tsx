import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Hat = ({
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
          id="255.校园招聘"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="校园招聘"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M11.8457063,0 L24,5.19075363 L21.3560518,6.15128081 L21.3560518,13.854376 C21.9919994,13.9992704 22.4810849,15.2892299 22.4810849,16.2622328 C22.4810849,16.9991805 22.1970816,17.6353096 21.7823646,17.9648239 L21.7823646,17.9648239 L22.4235076,20.1528221 L21.4995932,19.1386161 L21.1535137,21 L20.9232582,19.0540488 L20.3462537,19.8990106 L20.5939966,18.0199801 C20.1417874,17.7103285 19.8267192,17.0404108 19.8267192,16.2622055 C19.8267192,15.3488456 20.2576114,14.0963682 20.8365977,13.886058 L20.8365977,13.886058 L20.8365977,6.33658475 L11.8457063,9.59834985 L0,5.64311083 L11.8457063,0 Z M18.5005674,9.16150534 L18.5005674,14.8913722 C18.5005674,14.8913722 12.1536778,20.1954477 5.34616994,15.0605343 L5.34616994,15.0605343 L5.34616994,9.39460583 L11.8580252,11.5715782 L18.5005674,9.16150534 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Hat.displayName = 'Hat';
export default Hat;
