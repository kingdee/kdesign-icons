import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DeleteOne = ({
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
          id="1214-删除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M21,4.50000001 L21,21.0015 C21,21.8295 20.3145,22.5000121 19.494,22.5000121 L4.47300001,22.5000121 C4.07508387,22.5016029 3.69300251,22.3442405 3.41163103,22.062869 C3.13025955,21.7814975 2.9728971,21.3994161 2.97450001,21.0015 L3.066,4.50000001 L0,4.50000001 L0,3.00000001 L24,3.00000001 L24,4.50000001 L21,4.50000001 Z M4.47449999,21 L19.494,21 L19.5,4.49999998 L4.56600001,4.49999998 L4.47599999,21 L4.47449999,21 Z M5.99999999,0 L18,0 L18,1.5 L5.99999999,1.5 L5.99999999,0 Z M13.5,7.49999999 L15,7.49999999 L15,18 L13.5,18 L13.5,7.49999999 Z M8.99999999,7.49999999 L10.5,7.49999999 L10.5,18 L8.99999999,18 L8.99999999,7.49999999 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DeleteOne.displayName = 'DeleteOne';
export default DeleteOne;
