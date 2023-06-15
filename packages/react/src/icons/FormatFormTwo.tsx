import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const FormatFormTwo = ({
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
          id="1030.格式表格-2"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,2.15384615 L0,23.6923077 C0,24.8818441 0.964309765,25.8461538 2.15384615,25.8461538 L25.8461538,25.8461538 C27.0356902,25.8461538 28,24.8818441 28,23.6923077 L28,2.15384615 C28,0.964309765 27.0356902,0 25.8461538,0 L2.15384615,0 C0.964309765,0 0,0.964309765 0,2.15384615 Z M10.7953914,8.61952562 L17.2540377,8.61952562 L17.2540377,15.0433349 L10.7953914,15.0433349 L10.7953914,8.61952562 Z M17.2540377,17.2427978 L17.2540377,23.6923077 L10.7953914,23.6923077 L10.7953914,17.2427978 L17.2540377,17.2427978 Z M2.15384615,8.61952562 L8.6449632,8.61952562 L8.6449632,15.0433349 L2.15384615,15.0433349 L2.15384615,8.61952562 Z M19.4030198,8.61952562 L25.8461538,8.61952562 L25.8461538,15.0433349 L19.4030198,15.0433349 L19.4030198,8.61952562 Z M25.8461538,2.15384615 L25.8461538,6.4685874 L2.15384615,6.4616883 L2.15384615,2.14694706 L25.8461538,2.15384615 Z M2.15384615,17.2427978 L8.6449632,17.2427978 L8.6449632,23.6923077 L2.15384615,23.6923077 L2.15384615,17.2427978 Z M19.4030198,23.6923077 L19.4030198,17.2427978 L25.8461538,17.2427978 L25.8461538,23.6923077 L19.4030198,23.6923077 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
FormatFormTwo.displayName = 'FormatFormTwo';
export default FormatFormTwo;
