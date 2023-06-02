import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Report = ({
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
          id="795.报告"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 3.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M14.0841957,19.6 L13.9301957,19.6 L14.0071957,19.7 L14.0855957,19.6 L14.0841957,19.6 Z M16.8841957,19.6 L22.2293957,24.9438 L20.7439957,26.4278 L14.0071957,19.6924 L7.0855957,26.614 L5.6001957,25.13 L11.1301957,19.6 L4.20019569,19.6 C3.42739569,19.6 2.80019569,18.9644 2.80019572,18.2028 L2.80019572,4.27839999 C2.80019572,4.25179998 2.80019572,4.22659999 2.80299569,4.19999999 L1.40019571,4.19999999 C0.899977275,4.20006991 0.43772646,3.93324672 0.187597054,3.50005649 C-0.0625323514,3.06686627 -0.0625323514,2.53313372 0.187597054,2.0999435 C0.43772646,1.66675328 0.899977275,1.39993008 1.40019571,1.40000001 L12.6001957,1.40000001 L12.6001957,0 L15.4001957,0 L15.4001957,1.40000001 L26.6001957,1.40000001 C27.3733179,1.40010808 28,2.02687777 28,2.8 C28,3.57312222 27.3733179,4.19989191 26.6001957,4.19999999 L25.1973957,4.19999999 C25.1990708,4.22610155 25.2000045,4.25224542 25.2001957,4.27839999 L25.2001957,18.2028 C25.2001957,18.9742 24.5771957,19.6 23.8001957,19.6 L16.8841957,19.6 Z M7.0001957,11.2 L7.0001957,15.4 L8.40019571,15.4 L8.40019571,11.2 L7.0001957,11.2 Z M11.2001957,7 L11.2001957,15.4 L12.6001957,15.4 L12.6001957,7 L11.2001957,7 Z M15.4001957,9.79999998 L15.4001957,15.4 L16.8001957,15.4 L16.8001957,9.79999998 L15.4001957,9.79999998 Z M19.6001957,8.40000001 L19.6001957,15.4 L21.0001957,15.4 L21.0001957,8.40000001 L19.6001957,8.40000001 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Report.displayName = 'Report';
export default Report;