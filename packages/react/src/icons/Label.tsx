import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Label = ({
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
          id="104.标签"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="标签"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0,0.858232013 C0,0.384243572 0.384243572,0 0.858232013,0 L12.0152482,0 C12.2428655,0 12.4611601,0.090420606 12.6221099,0.251370334 L23.1202038,10.7494644 C24.2932654,11.9225259 24.2932654,13.8244345 23.1202038,14.997496 L14.997496,23.1202038 C13.8244345,24.2932654 11.9225259,24.2932654 10.7494644,23.1202038 L0.251370334,12.6221099 C0.090420606,12.4611601 0,12.2428655 0,12.0152482 L0,0.858232013 Z M1.71646403,1.71646403 L1.71646403,11.6597568 L11.9631877,21.9064805 C12.4659284,22.4092212 13.281032,22.4092212 13.7837727,21.9064805 L21.9064805,13.7837727 C22.4092212,13.281032 22.4092212,12.4659284 21.9064805,11.9631877 L11.6597568,1.71646403 L1.71646403,1.71646403 Z M6.8658561,10.2987842 C4.96990229,10.2987842 3.43292805,8.76180992 3.43292805,6.8658561 C3.43292805,4.96990229 4.96990229,3.43292805 6.8658561,3.43292805 C8.76180992,3.43292805 10.2987842,4.96990229 10.2987842,6.8658561 C10.2987842,8.76180992 8.76180992,10.2987842 6.8658561,10.2987842 Z M6.8658561,8.58232013 C7.81383301,8.58232013 8.58232013,7.81383301 8.58232013,6.8658561 C8.58232013,5.91787919 7.81383301,5.14939208 6.8658561,5.14939208 C5.91787919,5.14939208 5.14939208,5.91787919 5.14939208,6.8658561 C5.14939208,7.81383301 5.91787919,8.58232013 6.8658561,8.58232013 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Label.displayName = 'Label';
export default Label;
