import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const UnitAssociatedFields = ({
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
          id="1439-单位关联字段"
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
              d="M23.04,7.68 C23.5323226,7.68 23.9380867,8.0505984 23.9935411,8.52804385 L24,8.64 L24,23.04 C24,23.5323226 23.6294016,23.9380867 23.1519562,23.9935411 L23.04,24 L8.64,24 C8.14767744,24 7.74191327,23.6294016 7.68645888,23.1519562 L7.68,23.04 L7.68,18.24 L9.6,18.24 L9.6,22.08 L22.08,22.08 L22.08,9.6 L9.6,9.6 L9.6,12.48 L7.68,12.48 L7.68,8.64 C7.68,8.14767744 8.0505984,7.74191327 8.52804385,7.68645888 L8.64,7.68 L23.04,7.68 Z M15.36,0 C15.8523226,0 16.2580867,0.3705984 16.3135411,0.848043848 L16.32,0.96 L16.32,5.76 L14.4,5.76 L14.4,1.92 L1.92,1.92 L1.92,14.4 L14.4,14.4 L14.4,11.52 L16.32,11.52 L16.32,15.36 C16.32,15.8523226 15.9494016,16.2580867 15.4719562,16.3135411 L15.36,16.32 L0.96,16.32 C0.46767744,16.32 0.0619132723,15.9494016 0.00645888,15.4719562 L0,15.36 L0,0.96 C0,0.46767744 0.3705984,0.0619132723 0.848043848,0.00645888 L0.96,0 L15.36,0 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
UnitAssociatedFields.displayName = 'UnitAssociatedFields';
export default UnitAssociatedFields;
