import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Revoke = ({
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
          id="1204-撤销"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 6.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M15.4231306,3.42590331 L5.09500001,3.42590331 L5.09500001,0.240920213 C5.09456076,0.148345668 5.039614,0.0641233798 4.95345656,0.0239626541 C4.8672991,-0.0161980408 4.76502603,-0.00526088079 4.69000001,0.0521369226 L0.22500001,3.73099082 C0.102960319,3.82268445 0.0315534343,3.9638423 0.0315534343,4.11339799 C0.0315534343,4.2629537 0.102960319,4.40411156 0.22500001,4.49580519 L4.76338727,8.33519516 C4.83699822,8.3916509 4.93708059,8.40340688 5.02250124,8.36563154 C5.10792187,8.32785619 5.16427013,8.24692229 5.16838727,8.15609305 L5.16838727,5.08151746 L15.4231306,5.08151746 C19.2891238,5.08151746 22.2857143,8.27049267 22.2857143,12.0132359 C22.2857143,15.7559791 18.8659932,18.8509172 15,18.8509172 L0,18.8509172 L0,20.5714286 L15,20.5714286 C19.9705627,20.5714286 24,16.8253344 24,12.0132359 C24,7.20113746 20.3936933,3.42590331 15.4231306,3.42590331 Z"
              id="路径"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Revoke.displayName = 'Revoke';
export default Revoke;
