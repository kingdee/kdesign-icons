import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const LaborCostProject = ({
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
          id="377.人力成本项目"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 5.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M10.2232502,0 C10.5877906,0 10.9325661,0.161104672 11.1602928,0.437855776 L13.68,3.5 L22.8,3.5 C23.4627416,3.5 24,4.02233446 24,4.66666666 L24,5.83333331 C24,5.8972111 23.9947196,5.95988979 23.9845602,6.02097939 C23.9947708,6.08319661 24,6.1481232 24,6.2142857 L24,20.7857143 C24,21.4563457 23.4627416,22 22.8,22 L1.2,22 C0.537258304,22 0,21.4563457 0,20.7857143 L0,6.2142857 C0,6.1481232 0.005229248,6.08319661 0.01529232,6.01990602 C0.005280352,5.95988979 0,5.8972111 0,5.83333331 L0,1.16666666 C0,0.522334464 0.537258304,0 1.2,0 L10.2232502,0 Z M6,14.9962158 L4.01574707,14.9962158 L4.01574707,17.1428571 L6,17.1428571 L6,14.9962158 Z M20.0344238,14.9962158 L8.96142579,14.9962158 L8.96142579,17.1428571 L20.0344238,17.1428571 L20.0344238,14.9962158 Z M20.0344238,8.93786621 L8.96142579,8.93786621 L8.96142579,11.0714286 L20.0344238,11 L20.0344238,8.93786621 Z M6,8.93786621 L4.01574707,8.93786621 L4.01574707,11 L6,11 L6,8.93786621 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
LaborCostProject.displayName = 'LaborCostProject';
export default LaborCostProject;
