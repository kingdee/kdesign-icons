import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Inherit = ({
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
          id="1118-继承"
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
              d="M16.5,9 L19.5,9 L19.5,10.5 L16.5,10.5 L16.5,18 L15,18 L15,10.5 L12,10.5 L12,9 L15,9 L15,3 L16.5,3 L16.5,9 Z M10.5,19.5 L21,19.5 L21,21 L10.5,21 L9,21 L9,3 L10.5,3 L10.5,19.5 Z M4.5,16.5 L6,16.5 L6,18 L4.5,18 L3,18 L3,13.5 L4.5,13.5 L4.5,16.5 Z M4.5,10.5 L6,10.5 L6,9 L7.5,9 L7.5,12 L6,12 L6,13.5 L4.5,13.5 L4.5,12 L3,12 L3,6 L4.5,6 L4.5,4.5 L6,4.5 L6,3 L7.5,3 L7.5,6 L6,6 L6,7.5 L4.5,7.5 L4.5,10.5 Z M1.49999999,22.4986925 C1.49999999,22.5007627 8.49956415,22.5013463 22.4986925,22.5 C22.5007627,22.5 22.5013463,15.5004358 22.5,1.50130749 C22.5,1.49923728 15.5004358,1.49865382 1.50130749,1.49999999 C1.49923728,1.49999999 1.49865382,8.49956415 1.49999999,22.4986925 Z M-5.75539617e-16,1.50130749 C-5.75539617e-16,0.672158251 0.666946279,-5.75539617e-16 1.50130749,-5.75539617e-16 L22.4986925,-5.75539617e-16 C23.3278417,-5.75539617e-16 24,0.666946279 24,1.50130749 L24,22.4986925 C24,23.3278417 23.3330537,24 22.4986925,24 L1.50130749,24 C0.672158251,24 -5.75539617e-16,23.3330537 -5.75539617e-16,22.4986925 L-5.75539617e-16,1.50130749 Z M6,15 L7.5,15 L7.5,16.5 L6,16.5 L6,15 Z M6,18 L7.5,18 L7.5,19.5 L6,19.5 L6,18 Z M12,4.49999999 L13.5,4.49999999 L13.5,7.49999999 L12,7.49999999 L12,4.49999999 Z M18,4.49999999 L19.5,4.49999999 L19.5,7.49999999 L18,7.49999999 L18,4.49999999 Z M12,12 L13.5,12 L13.5,18 L12,18 L12,12 Z M18,12 L19.5,12 L19.5,18 L18,18 L18,12 Z M3,19.5 L6,19.5 L6,21 L3,21 L3,19.5 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Inherit.displayName = 'Inherit';
export default Inherit;
