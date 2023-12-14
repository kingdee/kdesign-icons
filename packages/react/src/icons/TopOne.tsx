import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const TopOne = ({
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
          id="995.置顶"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M23.0961344,16.0418461 C23.6797099,16.6233846 23.9318267,17.3212308 23.3481344,17.9027692 C22.7622882,18.4864615 22.0665959,18.2366154 21.4850575,17.6507692 L12.9709036,9.13876922 L12.9709036,26.6215385 C12.9709036,27.384 12.6413651,28 11.8810575,28 C11.1185959,28 10.6921344,27.384 10.6921344,26.6215385 L10.6921344,9.13876922 L2.18444206,17.64 C1.6029036,18.2215385 0.926595914,18.4907692 0.340749751,17.9092308 C-0.247250262,17.3233846 -0.0124810269,16.6126154 0.575518986,16.0310769 L10.7093651,5.89507693 C10.7093651,5.89507693 11.3167498,5.20153844 11.775519,5.20153844 C12.3247498,5.20153844 12.9644421,5.90584615 12.9644421,5.90584615 L23.0961344,16.0418461 L23.0961344,16.0418461 Z M22.0838267,2.15384616 L1.49521127,2.15384616 C0.547518969,2.15384616 0.000442075237,1.88030769 0.000442075237,1.09846153 C0.000442075237,0.31876921 0.474288246,0 1.49736512,0 L22.0816728,0 C23.0293651,0 23.5785959,0.299384632 23.5785959,1.07692306 C23.5785959,1.85661538 23.0121344,2.15384616 22.0816728,2.15384616 L22.0838267,2.15384616 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
TopOne.displayName = 'TopOne';
export default TopOne;
