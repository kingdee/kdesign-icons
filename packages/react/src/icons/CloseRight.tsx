import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const CloseRight = ({
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
          id="1252-右收起"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 1.000000)"
            fill="#666666"
            fillRule="nonzero"
          >
            <path
              d="M0,0 C1.98284661,0 5.01545222,0 8.98114544,0 C17.2758298,0 24,6.71572876 24,15 C24,23.2842712 17.2758298,30 8.98114544,30 C4.98952524,30 1.9958101,30 0,30 M0,28 L9,28 C16.1797017,28 22,22.1797018 22,15 L21.991794,14.5337317 C21.7463012,7.56999242 16.0236213,2 9,2 L0,2"
              id="形状结合"
              fill={color}
            ></path>
            <g
              id="左翻页备份3"
              transform="translate(9.625000, 15.000000) scale(1, 1) rotate(90.000000) translate(9.625000, 15.000000) translate(3.375000, 10.625000)"
            >
              <path
                d="M7.76272752,7.90118142 C6.92806928,9.03324364 5.5743724,9.03263536 4.74016264,7.90118142 L0.425982358,2.04977996 C-0.408675894,0.917717748 0.0175965664,1.13686838e-15 1.40385752,1.13686838e-15 L11.0990326,1.13686838e-15 C12.4737564,1.13686838e-15 12.9111176,0.918326026 12.0769078,2.04977996 L7.76272752,7.90118142 Z"
                id="Path-Copy-2"
                transform="translate(6.250000, 4.375000) scale(-1, 1) translate(-6.250000, -4.375000) "
                fill={color}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
CloseRight.displayName = 'CloseRight';
export default CloseRight;
