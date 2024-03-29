import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BlankDocument = ({
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
          id="1426-空白单据"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M19.0909091,0 C19.3921554,0 19.6363636,0.244208328 19.6363636,0.545454552 L19.6363636,23.4545454 C19.6363636,23.7557917 19.3921554,24 19.0909091,24 L0.545454552,24 C0.244208328,24 0,23.7557917 0,23.4545454 L0,0.545454552 C0,0.244208328 0.244208328,0 0.545454552,0 L19.0909091,0 Z M18.5454546,1.09090908 L1.09090908,1.09090908 L1.09090908,22.9090909 L18.5454546,22.9090909 L18.5454546,1.09090908 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BlankDocument.displayName = 'BlankDocument';
export default BlankDocument;
