import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DeleteSolid = ({
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
          id="6.删除"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="删除"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M18.6,10.8 L5.4,10.8 C5.06862915,10.8 4.8,11.0686292 4.8,11.4 L4.8,11.4 L4.8,12.6 C4.8,12.9313709 5.06862915,13.2 5.4,13.2 L5.4,13.2 L18.6,13.2 C18.9313709,13.2 19.2,12.9313709 19.2,12.6 L19.2,12.6 L19.2,11.4 C19.2,11.0686292 18.9313709,10.8 18.6,10.8 L18.6,10.8 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DeleteSolid.displayName = 'DeleteSolid';
export default DeleteSolid;
