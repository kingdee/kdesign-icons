import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Channels = ({
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
          id="833.渠道"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,16.9473684 L6.63157895,13.2631579 L13.2631579,16.9473684 L13.2631579,24.3157895 L6.63157895,28 L0,24.3157895 L0,16.9473684 Z M7.36842105,3.68421053 L14,0 L20.6315789,3.68421053 L20.6315789,11.0526316 L14,14.7368421 L7.36842105,11.0526316 L7.36842105,3.68421053 Z M14.7368421,16.9473684 L21.3684211,13.2631579 L28,16.9473684 L28,24.3157895 L21.3684211,28 L14.7368421,24.3157895 L14.7368421,16.9473684 Z M16.2105263,23.4492632 L21.3684211,26.3141053 L26.5263158,23.4492632 L26.5263158,17.8138947 L21.3684211,14.9490526 L16.2105263,17.8138947 L16.2105263,23.4492632 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Channels.displayName = 'Channels';
export default Channels;
