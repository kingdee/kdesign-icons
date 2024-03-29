import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Stop = ({
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
          id="128.禁止"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="禁止"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M4.14595318,5.35813624 C2.6289916,7.1501497 1.71428571,9.46825432 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 C14.5317457,22.2857143 16.8498503,21.3710084 18.6418637,19.8540468 L4.14595318,5.35813624 L4.14595318,5.35813624 Z M5.35813624,4.14595318 L19.8540468,18.6418637 C21.3710084,16.8498503 22.2857143,14.5317457 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 C9.46825432,1.71428571 7.1501497,2.6289916 5.35813624,4.14595318 L5.35813624,4.14595318 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Stop.displayName = 'Stop';
export default Stop;
