import React from 'react';
import { IconWrapper, SvgIconProps } from '../components/index';

const ApprovalRecord = ({
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
          id="1217-审批记录"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="编组"
            transform="translate(4.000000, 4.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <path
              d="M12,1.00000001 C5.92600001,1.00000001 1.00000001,5.92600001 1.00000001,12 C1.00000001,18.074 5.92600001,23 12,23 C18.074,23 23,18.074 23,12 C23,5.92600001 18.074,1.00000001 12,1.00000001 Z M12,13 L12,4.99999999 L11,4.99999999 L11,14 L19,14 L19,13 L12,13 L12,13 Z M12,0 C18.626,0 24,5.37400001 24,12 C24,18.626 18.626,24 12,24 C5.37400001,24 0,18.626 0,12 C0,5.37400001 5.37400001,0 12,0 Z"
              id="形状"
              fill={fill}
            ></path>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};
ApprovalRecord.displayName = 'ApprovalRecord';
export default ApprovalRecord;
