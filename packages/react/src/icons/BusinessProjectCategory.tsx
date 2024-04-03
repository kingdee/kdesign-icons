import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const BusinessProjectCategory = ({
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
          id="1696.业务项目类别"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.900000036"
        >
          <g
            id="Group-18-Copy"
            transform="translate(4.000000, 2.000000)"
            fill="#333333"
          >
            <path
              d="M22.998311,0 C23.5505957,-2.06356265e-15 23.998311,0.44771525 23.998311,1 L23.998311,27 C23.998311,27.5522847 23.5505957,28 22.998311,28 L1,28 C0.44771525,28 3.38176876e-17,27.5522847 0,27 L0,1 C-6.76353751e-17,0.44771525 0.44771525,6.76353751e-17 1,0 L22.998311,0 Z M6,20.4801025 L4,20.4801025 L4,22.4801025 L6,22.4801025 L6,20.4801025 Z M19,20.4801025 L9,20.4801025 C8.44771525,20.4801025 8,20.9278178 8,21.4801025 C8,22.0323873 8.44771525,22.4801025 9,22.4801025 L19,22.4801025 C19.5522847,22.4801025 20,22.0323873 20,21.4801025 C20,20.9278178 19.5522847,20.4801025 19,20.4801025 Z M6,15.4801025 L4,15.4801025 L4,17.4801025 L6,17.4801025 L6,15.4801025 Z M19,15.4801025 L9,15.4801025 C8.44771525,15.4801025 8,15.9278178 8,16.4801025 C8,17.0323873 8.44771525,17.4801025 9,17.4801025 L19,17.4801025 C19.5522847,17.4801025 20,17.0323873 20,16.4801025 C20,15.9278178 19.5522847,15.4801025 19,15.4801025 Z M6,10.4801025 L4,10.4801025 L4,12.4801025 L6,12.4801025 L6,10.4801025 Z M19,10.4801025 L9,10.4801025 C8.44771525,10.4801025 8,10.9278178 8,11.4801025 C8,12.0323873 8.44771525,12.4801025 9,12.4801025 L19,12.4801025 C19.5522847,12.4801025 20,12.0323873 20,11.4801025 C20,10.9278178 19.5522847,10.4801025 19,10.4801025 Z M6,5.48010254 L4,5.48010254 L4,7.48010254 L6,7.48010254 L6,5.48010254 Z M19,5.48010254 L9,5.48010254 C8.44771525,5.48010254 8,5.92781779 8,6.48010254 C8,7.03238729 8.44771525,7.48010254 9,7.48010254 L19,7.48010254 C19.5522847,7.48010254 20,7.03238729 20,6.48010254 C20,5.92781779 19.5522847,5.48010254 19,5.48010254 Z"
              id="形状结合"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
BusinessProjectCategory.displayName = 'BusinessProjectCategory';
export default BusinessProjectCategory;
