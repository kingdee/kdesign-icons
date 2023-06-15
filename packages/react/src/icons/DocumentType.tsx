import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const DocumentType = ({
  size = '1em',
  fill = 'currentColor',
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
          id="806.单据类型"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.55555556,0 L21.7777778,0 C22.6368874,0 23.3333333,0.696445945 23.3333333,1.55555556 L23.3333333,26.4444444 C23.3333333,27.3035541 22.6368874,28 21.7777778,28 L1.55555556,28 C0.696445945,28 0,27.3035541 0,26.4444444 L0,1.55555556 C0,0.696445945 0.696445945,0 1.55555556,0 Z M4.66666667,14 L4.66666667,15.5555556 L18.6666667,15.5555556 L18.6666667,14 L4.66666667,14 Z M4.66666667,18.6666667 L4.66666667,20.2222222 L18.6666667,20.2222222 L18.6666667,18.6666667 L4.66666667,18.6666667 Z M12.4444444,0 L12.4444444,9.33333333 L16.3613333,6.22222222 L20.2222222,9.33333333 L20.2222222,0 L12.4444444,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
DocumentType.displayName = 'DocumentType';
export default DocumentType;
