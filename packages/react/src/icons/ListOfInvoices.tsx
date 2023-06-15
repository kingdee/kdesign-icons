import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ListOfInvoices = ({
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
          id="389.发票列表"
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
              d="M17.1428571,0 L17.1428571,7 L24,7 L24,25.984 C24,27.0974061 23.0974061,28 21.984,28 L2.016,28 C0.902593952,28 0,27.0974061 0,25.984 L0,2.016 C0,0.902593952 0.902593952,0 2.016,0 L17.1428571,0 Z M19.5,21 L4.5,21 C4.22385763,21 4,21.2238576 4,21.5 C4,21.7761424 4.22385763,22 4.5,22 L4.5,22 L19.5,22 C19.7761424,22 20,21.7761424 20,21.5 C20,21.2238576 19.7761424,21 19.5,21 L19.5,21 Z M19.5,16 L4.5,16 C4.22385763,16 4,16.2238576 4,16.5 C4,16.7761424 4.22385763,17 4.5,17 L4.5,17 L19.5,17 C19.7761424,17 20,16.7761424 20,16.5 C20,16.2238576 19.7761424,16 19.5,16 L19.5,16 Z M19.5,11 L4.5,11 C4.22385763,11 4,11.2238576 4,11.5 C4,11.7761424 4.22385763,12 4.5,12 L4.5,12 L19.5,12 C19.7761424,12 20,11.7761424 20,11.5 C20,11.2238576 19.7761424,11 19.5,11 L19.5,11 Z M18,0 L24,6.125 L24,6.125 L18,6.125 L18,6.125 L18,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ListOfInvoices.displayName = 'ListOfInvoices';
export default ListOfInvoices;
