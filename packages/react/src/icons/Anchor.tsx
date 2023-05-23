import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const Anchor = ({
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
          id="639.锚点"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(6.000000, 2.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M0.61078528,13.7799886 C0.20512712,12.6460247 -0.00150321351,11.4504835 8.23208905e-06,10.2461454 C8.23208905e-06,4.58768851 4.47693593,0 10.0000082,0 C15.5230806,0 20.0000082,4.58768851 20.0000082,10.2461454 C20.0000082,11.4922982 19.7830771,12.6892203 19.3846159,13.7938347 L19.5476927,13.7353732 C19.6276926,13.744604 18.5815396,17.4553702 9.98923906,27.6922848 C4.300013,20.7953674 1.12463101,16.1338328 0.463093095,13.707681 L0.61078528,13.7799886 Z M10.0000083,13.8461424 C12.1241786,13.8461424 13.8461589,12.1241621 13.8461589,9.99999172 C13.8461589,7.87582137 12.1241786,6.15384106 10.0000083,6.15384106 C7.87583792,6.15384106 6.15385761,7.87582137 6.15385761,9.99999172 C6.15385761,12.1241621 7.87583792,13.8461424 10.0000083,13.8461424 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
Anchor.displayName = 'Anchor';
export default Anchor;
