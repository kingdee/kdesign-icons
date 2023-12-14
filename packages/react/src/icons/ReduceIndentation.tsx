import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ReduceIndentation = ({
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
          id="984.减少缩进量"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0 L28,0 L28,1.55555556 L0,1.55555556 L0,0 Z M10.8888889,6.22222221 L28,6.22222221 L28,7.77777777 L10.8888889,7.77777777 L10.8888889,6.22222221 Z M0.91,9.47333332 L6.55355556,5.52222221 C6.79124147,5.35560919 7.1019274,5.33521388 7.35935466,5.46932465 C7.61678191,5.60343542 7.77811018,5.86973395 7.77777828,6.16 L7.77777828,14.0622222 C7.77811018,14.3524883 7.61678191,14.6187868 7.35935466,14.7528976 C7.1019274,14.8870083 6.79124147,14.866613 6.55355556,14.7 L0.91,10.7488889 C0.701582197,10.6034124 0.577393838,10.3652792 0.577393838,10.1111111 C0.577393838,9.85694306 0.701582197,9.61880984 0.91,9.47333332 L0.91,9.47333332 Z M10.8888889,12.4444444 L28,12.4444444 L28,14 L10.8888889,14 L10.8888889,12.4444444 Z M0,18.6666666 L28,18.6666666 L28,20.2222222 L0,20.2222222 L0,18.6666666 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ReduceIndentation.displayName = 'ReduceIndentation';
export default ReduceIndentation;
