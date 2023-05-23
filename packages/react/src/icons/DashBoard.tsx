import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Dashboard = ({
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
          id="908.仪表版"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(2.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M1.47368421,1.47368421 L1.47368421,19.1578947 L26.5263158,19.1578947 L26.5263158,1.47368421 L1.47368421,1.47368421 Z M1.47368421,-1.09074543e-15 L26.5263158,-1.09074543e-15 C27.3402091,-1.09074543e-15 28,0.659790895 28,1.47368421 L28,19.1578947 C28,19.9717881 27.3402091,20.6315789 26.5263158,20.6315789 L1.47368421,20.6315789 C0.659790895,20.6315789 0,19.9717881 0,19.1578947 L0,1.47368421 C0,0.659790895 0.659790895,-1.09074543e-15 1.47368421,-1.09074543e-15 Z M2.94736842,2.94736842 L13.2631579,2.94736842 L13.2631579,17.6842105 L2.94736842,17.6842105 L2.94736842,2.94736842 Z M14.7368421,2.94736842 L25.0526316,2.94736842 L25.0526316,8.84210526 L14.7368421,8.84210526 L14.7368421,2.94736842 Z M14.7368421,10.3157895 L25.0526316,10.3157895 L25.0526316,17.6842105 L14.7368421,17.6842105 L14.7368421,10.3157895 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Dashboard.displayName = 'Dashboard';
export default Dashboard;
