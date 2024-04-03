import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const InventoryManagement = ({
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
          id="1705.库存管理"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M5,13 C5,12.4477153 5.44771525,12 6,12 L27,12 C27.5522847,12 28,12.4477153 28,13 L28,28 L29,28 C29.5522847,28 30,28.4477153 30,29 C30,29.5522847 29.5522847,30 29,30 L4,30 C3.44771525,30 3,29.5522847 3,29 C3,28.4477153 3.44771525,28 4,28 L5,28 L5,13 Z M11,23 L8,23 L8,26 L11,26 L11,23 Z M18,23 L15,23 L15,26 L18,26 L18,23 Z M25,23 L22,23 L22,26 L25,26 L25,23 Z M11,18 L8,18 L8,21 L11,21 L11,18 Z M18,18 L15,18 L15,21 L18,21 L18,18 Z M3.51535717,10 C2.8077969,9.68225233 2.84893951,8.99796047 3.51535717,8.5426003 C3.95047198,8.24477074 8.12097942,6.03638565 16.0268795,1.91744504 L16.0265542,1.91682111 C16.3149898,1.76643229 16.6585498,1.76573343 16.9475948,1.91494755 C24.9224354,6.03528642 29.11386,8.24469662 29.5221669,8.5426003 C30.1462838,8.99792879 30.1760188,9.68225233 29.5107304,10 L3.51535717,10 Z"
            id="形状结合"
            fill={fill}
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};
InventoryManagement.displayName = 'InventoryManagement';
export default InventoryManagement;
