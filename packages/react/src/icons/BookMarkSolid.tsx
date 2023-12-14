import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BookMarkSolid = ({
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
          id="38.书签"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="书签"
            transform="translate(7.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M18.1363637,0 C18.6133368,0 19,0.383734775 19,0.857095586 L19,23.1415806 C19,23.8077963 18.2676613,24.2192992 17.6920264,23.876534 L9.5,18.9985438 L1.30797362,23.876534 C0.732338795,24.2192992 0,23.8077963 0,23.1415806 L0,0.857095586 C0,0.383734775 0.386663183,0 0.86363637,0 L18.1363637,0 Z M6.90918672,5.14257349 L5.18191401,5.14257349 L5.18191401,6.85676463 L6.90918672,6.85676463 L6.90918672,5.14257349 Z M3.45445071,5.14257349 L1.727178,5.14257349 L1.727178,6.85676463 L3.45445071,6.85676463 L3.45445071,5.14257349 Z M10.363731,5.14257349 L8.6364583,5.14257349 L8.6364583,6.85676463 L10.363731,6.85676463 L10.363731,5.14257349 Z M13.818277,5.14257349 L12.0910043,5.14257349 L12.0910043,6.85676463 L13.818277,6.85676463 L13.818277,5.14257349 Z M17.272823,5.14257349 L15.5455503,5.14257349 L15.5455503,6.85676463 L17.272823,6.85676463 L17.272823,5.14257349 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BookMarkSolid.displayName = 'BookMarkSolid';
export default BookMarkSolid;
