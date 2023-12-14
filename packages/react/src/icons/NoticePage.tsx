import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const NoticePage = ({
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
          id="630.通知单"
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
              d="M1.14450405,10.6694252 C1.28134393,10.725043 1.28134393,11.665505 1.14450405,13.4908113 L12.0004048,17.90313 L21.5599162,14.0174591 L22.736969,13.5390205 C22.6454688,11.6631493 22.6454688,10.7066175 22.736969,10.6694252 C22.8284693,10.6322329 23.2494797,11.4176359 24,13.0256341 L24,22.6285714 C24,23.3859905 23.3859905,24 22.6285714,24 L1.37142857,24 C0.614009499,24 0,23.3859905 0,22.6285714 L0,13.0256341 C0.626162825,11.3992104 1.00766416,10.6138074 1.14450405,10.6694252 Z M19.8050421,0 C20.5624612,0 21.1764706,0.614009499 21.1764706,1.37142857 L21.1764706,12.0851237 L12,16 L2.8235294,12.0851237 L2.8235294,1.37142857 C2.8235294,0.614009499 3.4375389,0 4.19495797,0 L19.8050421,0 Z M18.3529413,8.00000001 L5.64705883,8.00000001 L5.64705883,9.33333334 L18.3529413,9.33333334 L18.3529413,8.00000001 Z M18.3529413,3.99999999 L5.64705883,3.99999999 L5.64705883,5.33333332 L18.3529413,5.33333332 L18.3529413,3.99999999 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
NoticePage.displayName = 'NoticePage';
export default NoticePage;
