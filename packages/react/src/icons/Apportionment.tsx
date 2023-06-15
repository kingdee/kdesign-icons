import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Apportionment = ({
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
          id="862.分摊"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(3.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,2.94736842 L10.3157895,2.94736842 L10.3157895,25.0526316 L1.47368421,25.0526316 C0.659790895,25.0526316 0,24.3928407 0,23.5789474 L0,4.42105263 C0,3.60715932 0.659790895,2.94736842 1.47368421,2.94736842 Z M11.7894737,0 L13.2631579,0 L13.2631579,28 L11.7894737,28 L11.7894737,0 L11.7894737,0 Z M14.7368421,2.94736842 L23.5789474,2.94736842 C23.9697927,2.94736842 24.3446301,3.10263113 24.6209995,3.37900053 C24.8973689,3.65536993 25.0526316,4.03020728 25.0526316,4.42105263 L25.0526316,23.5789474 C25.0526316,24.3928407 24.3928407,25.0526316 23.5789474,25.0526316 L14.7368421,25.0526316 L14.7368421,2.94736842 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Apportionment.displayName = 'Apportionment';
export default Apportionment;
