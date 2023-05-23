import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const SetAsDefault = ({
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
          id="1209-设为默认"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.6274169,0 24,5.372583 24,12 C24,18.6274169 18.6274169,24 12,24 C5.372583,24 0,18.6274169 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1.71428571 C6.31935686,1.71428571 1.71428571,6.31935686 1.71428571,12 C1.71428571,17.6806431 6.31935686,22.2857143 12,22.2857143 C17.6806431,22.2857143 22.2857143,17.6806431 22.2857143,12 C22.2857143,6.31935686 17.6806431,1.71428571 12,1.71428571 Z M12,3.20609875 L14.5834286,8.44285714 L20.363497,9.28253508 L16.1811429,13.3594286 L17.1689254,19.1144155 L12,16.3954286 L6.83107455,19.1144155 L7.81714286,13.3594286 L3.6365029,9.28253508 L9.41485714,8.44285714 L12,3.20609875 Z M12,7.07828571 L10.5539353,10.0096627 L7.32,10.4777143 L9.66021814,12.7602412 L9.10628571,15.9805714 L12,14.4601922 L14.892,15.9805714 L14.3397819,12.7602412 L16.6782857,10.4777143 L13.4460647,10.0096627 L12,7.07828571 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
SetAsDefault.displayName = 'SetAsDefault';
export default SetAsDefault;
