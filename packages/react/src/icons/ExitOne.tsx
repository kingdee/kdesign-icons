import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ExitOne = ({
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
          id="1080.退出"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 2.000000)"
            fill="#333333"
            fillRule="nonzero"
          >
            <path
              d="M13.1740822,0 L14.822807,0 L14.822807,14.8229696 L13.1740822,14.8229696 L13.1740822,0 Z M8.23568463,1.23809905 L8.23568463,3.0719166 C3.21409628,5.72171465 0.645842449,11.4536754 2.01076789,16.9650054 C3.37569333,22.4763353 8.32216773,26.3472128 14,26.3472128 C19.6778323,26.3472128 24.6243067,22.4763353 25.9892321,16.9650054 C27.3541576,11.4536754 24.7859037,5.72171465 19.7643154,3.0719166 L19.7643154,1.23809905 C25.774283,3.95379505 29.0736156,10.4959771 27.6846116,16.9430992 C26.2956076,23.3902213 20.5950524,27.9934172 14,27.9934172 C7.40494764,27.9934172 1.70439245,23.3902213 0.315388403,16.9430992 C-1.07361564,10.4959771 2.225717,3.95379505 8.23568463,1.23809905 L8.23568463,1.23809905 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ExitOne.displayName = 'ExitOne';
export default ExitOne;
