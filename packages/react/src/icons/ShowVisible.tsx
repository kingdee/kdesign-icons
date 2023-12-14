import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ShowVisible = ({
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
          id="56.显示、可见"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="显示、可见"
            transform="translate(4.000000, 7.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,19 C5.372583,19 0,12.9545455 0,9.5 C0,6.04545455 5.372583,0 12,0 C18.627417,0 24,6.04545455 24,9.5 C24,12.9545455 18.627417,19 12,19 Z M12,4.31818182 C9.63306539,4.31818182 7.71428571,6.2514977 7.71428571,8.63636364 L7.71428571,10.3636364 C7.71428571,12.7485023 9.63306539,14.6818182 12,14.6818182 C14.3669346,14.6818182 16.2857143,12.7485023 16.2857143,10.3636364 L16.2857143,8.63636364 C16.2857143,6.2514977 14.3669346,4.31818182 12,4.31818182 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ShowVisible.displayName = 'ShowVisible';
export default ShowVisible;
